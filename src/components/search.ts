import axios from "axios";

export default function loadOptions(filterText) {
    if (filterText.length >= 3) {
        return axios({ method: "POST", url: "http://localhost:8090/", data: {school: filterText }, headers: {"content-type": "text/plain"}})
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
    let total = 0;
    for (let key in averages) {
        total += averages[key];
    }
    return (total / Object.keys(averages).length)
};
