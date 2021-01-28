package main

import (
	"encoding/csv"
	"fmt"
	"log"
	"os"
	"sort"
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
		if contains(csv, typedSchool.SearchedSchool) {
			filteredList = append(filteredList, value)
		}
	}

	fmt.Print(filteredList)
	return filteredList

}

func contains(s [][]string, e string) bool {
	for _, a := range s {
		if a[0] == e {
			return true
		}
	}
	return false
}
