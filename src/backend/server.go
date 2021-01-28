package main

import (
	"encoding/json"
	"net/http"
	"sort"
)

func runServer(w http.ResponseWriter, request *http.Request) {

	//Decode the Body request sent from frontend -> school: "nameofschool"
	decoder := json.NewDecoder(request.Body)
	var selectedSchool search
	decoder.Decode(&selectedSchool)

	//Read CSV from parcoursup2020 open data
	csv := schoolReader("testData.csv")

	//Filter data according to the body request for autocomplete
	filtered := filterSchools(selectedSchool, csv)
	filtered = limitArray(filtered);


	//csvContent, err := gocsv.MarshalString(&filtered) // Get all clients as CSV string
	////err = gocsv.MarshalFile(&clients, clientsFile) // Print CSV
	//if err != nil {
	//	panic(err)
	//}

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(filtered); err != nil {
		panic(err)
	}


}

func main() {

	port := "8090"

	http.HandleFunc("/", runServer)
	http.ListenAndServe(":"+port,nil)


}

type search struct {
	SearchedSchool string `json:"school"`
}

func limitArray(filtered []*Schools)[]*Schools {
	sort.SliceStable(filtered, func(i,j int) bool  {
		return filtered[i].School < filtered[j].School})

	if len(filtered) > 20 {
		filtered = filtered[:20]
	}

	return filtered
}




