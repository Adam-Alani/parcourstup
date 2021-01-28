package main

import (
	"encoding/csv"
	"log"
	"os"
	"sort"
	"strings"

	"github.com/gocarina/gocsv"
)

func schoolReader(filePath string ) [][]string {
	file, err := os.Open(filePath)
	if err != nil {
		log.Fatal("Unable to read input file")
	}
	defer file.Close()

	reader := csv.NewReader(file)
	reader.Comma = ';'

	rows , err := reader.ReadAll()
	if err != nil {
		log.Fatal("Unable to parse input file")
	}
	sort.SliceStable(rows, func(i,j int) bool  {
		return rows[i][0] < rows[j][0]
	})
	return rows
}


func filterSchools(typedSchool search , csv [][]string) [][]string {
	filteredList := make([][]string, 0 ,0)
	for _ , value := range csv {
		if strings.Contains(strings.ToUpper(value[0]), strings.ToUpper(typedSchool.SearchedSchool)) {
			filteredList = append(filteredList, value)
		}
	}
	return filteredList
}

type SchoolCSV struct { // Our example struct, you can use "-" to ignore a field
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







