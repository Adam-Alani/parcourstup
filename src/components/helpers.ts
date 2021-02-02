import axios from "axios";
import {writable} from "svelte/store";

export default function loadOptions(filterText:string) {
    if (filterText.length >= 2) {
        return axios({ method: "POST", url: "https://parcourstupback.herokuapp.com/", data: {school: filterText }, headers: {"content-type": "text/plain"}})
            .then(result => result.data)
    }
}
export const optionIdentifier = "Link"; /** This const is used to differentiatea the items showed inside of the search
                                            dropdown  */



/** Approximate average according to the 2020 School data
 * Data is made up of the following:
 *      - "Mention tres bien" : Any grade between 16-20
 *      - "Mention Bien" : Any grade between 14-16
 *      - "Mention Assez Bien: Any grade between 12-14
 *      - "Bac": The passing grade, anything between 10-12
 * . */
export function getAverageSchoolGrade(school:object):string {
    let noMention = parseFloat(school["NoMention"]);
    let assezBien = parseFloat(school["AssezBien"]);
    let bien = parseFloat(school["Bien"]);
    let tresBien = parseFloat(school["TresBien"]);

    if ( school["TresBien"] >= 90) {
        return "16+"
    }
    if (noMention +  assezBien+  bien + tresBien < 90 || (isNaN(noMention) && isNaN(assezBien) && isNaN(bien) && isNaN(tresBien))) {
        return ("-1");
    }
    return ((11*parseFloat(school["NoMention"]) + 13*parseFloat(school["AssezBien"]) + 14.5*parseFloat(school["Bien"]) + 16.5*parseFloat(school["TresBien"]))/100).toFixed(2).toString();
}

export const passingGrade = (school:object , totalAverage):string => {
   if (totalAverage > parseFloat(getAverageSchoolGrade(school)))  {
       return "Oui"
   }
   return "Non"
};


/** Calculate weighted average according to the 2021 Baccalaureat specifications. */
export const average = (averages: { [x: string]: number; }):number => {
    let total:number = 0;
    for (let key in averages) {
        let weightedAverage = 0;
        switch (key) {
            case "EC":
                weightedAverage = averages[key]*30;
                break;
            case "Bulletin":
                weightedAverage = averages[key]*10;
                break;

            case "Francais Oral":
            case "Francais Ecrit":
                weightedAverage = averages[key]*5;
                break;
            case "Spe 1":
            case "Spe 2":
                weightedAverage = averages[key]*16
                break
            case "Philo":
                weightedAverage = averages[key]*8
                break
            case "Grand Oral":
                weightedAverage = averages[key]*10
                break
        }
        total += weightedAverage;
    }
    return (total / 100)
};


export function propositionsMessage(schools , totalAverage):string {
    let propositions:number = 0;
    for (let i = 0; i < schools.length ; i++) {
        if (passingGrade(schools[i] , totalAverage) === "Oui") {
            propositions++;
        }
    }
    return propositionsCount(propositions);

}

function propositionsCount(propositions:number):string {
    if (propositions === 0) {
        return "Vous n'avez pas de propositions"
    }
    else if (propositions === 1) {
        return "Vous avez une proposition"
    }
    else {
        return "Vous avez " + propositions + " propositions"
    }
}

/** Compare objects  */
export function differentObjects(schools:object[] , option:object):boolean  {
    for (let i = 0 ; i < schools.length ; i++) {
        if (JSON.stringify(schools[i]) == JSON.stringify(option)) {

            return false;
        }
    }
    return true;
}

/** returns if the school is selective or not. */
export function nonSelectiveSchool(option:object):boolean {
    return option["Selectivity"] === "formation non sélective";
}

