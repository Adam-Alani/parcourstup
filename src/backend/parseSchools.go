package main

import (
	"encoding/csv"
	"io"
	"strings"

	//"log"
	"os"

	"github.com/gocarina/gocsv"
)

func schoolReader(filePath string) []*Schools {

	gocsv.SetCSVReader(func(in io.Reader) gocsv.CSVReader {
		r := csv.NewReader(in)
		r.Comma = ';'
		return r
	})

	schoolsList, err := os.OpenFile(filePath, os.O_RDWR|os.O_CREATE, os.ModePerm)
	if err != nil {
		panic(err)
	}
	defer schoolsList.Close()

	var clients []*Schools

	if err := gocsv.UnmarshalFile(schoolsList, &clients); err != nil { // Load clients from file
		panic(err)
	}


	if _, err := schoolsList.Seek(0, 0); err != nil { // Go to the start of the file
		panic(err)
	}

	return clients;
}


func filterSchools(typedSchool search , csv []*Schools) []*Schools {
	filteredList := make([]*Schools, 0 ,0)
	for i := range csv {
		if strings.Contains(strings.ToUpper(csv[i].School), strings.ToUpper(typedSchool.SearchedSchool)) {
			filteredList = append(filteredList, csv[i])
		}
	}
	return filteredList
}

type Schools struct { // Our example struct, you can use "-" to ignore a field
	Status      string `csv:"status"`
	School    string `csv:"school"`
	CodeDep     string `csv:"codedep"`
	Department string `csv:"departement"`
	Region string `csv:"region"`
	Academy     string `csv:"academie"`
	Selectivity string `csv:"selectivity"`
	Filiere string `csv:"filiere"`
	DetFiliere string `csv:"det_filiere"`
	Formation string `csv:"formation"`
	DetFormation string `csv:"formation_det"`
	VertDetFormation string `csv:"formation_tres_det"`
	Link string `csv:"link"`
	Capacity string `csv:"capacity"`
	total string `csv:"total"`
	Received string `csv:"recieved_offer"`
	Accepted string `csv:"accepted_offer"`
	NoMention string `csv:"no_mention"`
	AssezBien string `csv:"assez_bien"`
	Bien string `csv:"bien"`
	TresBien string `csv:"tres_bien"`
}

