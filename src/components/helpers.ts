import axios from "axios";

export default function loadOptions(filterText) {
    if (filterText.length >= 2) {
        return axios({ method: "POST", url: "https://parcourstupback.herokuapp.com/", data: {school: filterText }, headers: {"content-type": "text/plain"}})
            .then(result => result.data)
    }
}
export const optionIdentifier = "School";


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
        total += averages[key];
    }
    return (total / Object.keys(averages).length)
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
    if (propositions === 1) {
        return "Vous avez une proposition"
    }
    if (propositions > 1) {
        return "Vous avez " + propositions + " propositions"
    }
}

export function compareObjects(schools:object[] , option:object):boolean  {
    for (let i = 0 ; i < schools.length ; i++) {
        if (JSON.stringify(schools[i]) === JSON.stringify(option)) {
            return false;
        }
    }
    return true;
}
