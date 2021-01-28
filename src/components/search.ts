import axios from "axios";

export default function loadOptions(filterText) {
    if (filterText.length >= 3) {
        return axios({ method: "POST", url: "http://localhost:8090/", data: {school: filterText }, headers: {"content-type": "text/plain"}})
            .then(result => result.data)
    }
}

export const optionIdentifier = "School"

