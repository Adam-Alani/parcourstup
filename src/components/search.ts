import axios from "axios";

export default function loadOptions(filterText) {
    if (filterText.length >= 3) {
        return axios({ method: "POST", url: "http://localhost:8090/", data: {school: filterText }, headers: {"content-type": "text/plain"}})
            .then(result => result.data)
    }
}
export const optionIdentifier = "School";



export function getAverageSchoolGrade(school:object) {
    return (10.5*school["NoMention"] + 12.5*school["AssezBien"] + 14.5*school["Bien"] + 17*school["TresBien"])/100
}
