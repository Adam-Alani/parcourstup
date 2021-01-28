package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func runServer(w http.ResponseWriter, request *http.Request) {
	decoder := json.NewDecoder(request.Body)

	var selectedSchool search
	decoder.Decode(&selectedSchool)


	csv := schoolReader("testData.csv")
	filtered := csv
	fmt.Print(len(selectedSchool.SearchedSchool))
	if len(selectedSchool.SearchedSchool) > 0 {
		filtered = filterSchools(selectedSchool , csv)
		fmt.Print(filtered)
	}



	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(filtered[:10]); err != nil {
		panic(err)
	}


}

func main() {

	port := "8090"

	http.HandleFunc("/", runServer)
	http.ListenAndServe(":"+port,nil)


}

type search struct {
	SearchedSchool string `json:"name"`
}

