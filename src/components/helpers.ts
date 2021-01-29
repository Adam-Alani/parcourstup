import axios from "axios";
import {writable} from "svelte/store";

export default function loadOptions(filterText) {
    if (filterText.length >= 2) {
        return axios({ method: "POST", url: "https://parcourstupback.herokuapp.com/", data: {school: filterText }, headers: {"content-type": "text/plain"}})
            .then(result => result.data)
    }
}
export const optionIdentifier = "Link";


export function getAverageSchoolGrade(school:object):number {
    return (10.5*school["NoMention"] + 12.5*school["AssezBien"] + 14.5*school["Bien"] + 17*school["TresBien"])/100
}

export const passingGrade = (school:object , totalAverage):string => {
   if (totalAverage > getAverageSchoolGrade(school))  {
       return "Oui"
   }
   return "Non"
};

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

export function differentObjects(schools:object[] , option:object):boolean  {
    for (let i = 0 ; i < schools.length ; i++) {
        if (JSON.stringify(schools[i]) == JSON.stringify(option)) {

            return false;
        }
    }
    return true;
}

export function nonSelectiveSchool(option:object):boolean {
    return option["Selectivity"] === "formation non sélective";
}

