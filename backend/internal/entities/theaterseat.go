package entities

import (
	"strconv"
	"strings"
)

const (
	TheaterTypeSmall = iota + 1
	TheaterTypeMidium
	TheaterTypeLarge
)

var theater map[int]string = map[int]string{
	TheaterTypeSmall:  "7:10",
	TheaterTypeMidium: "10:12",
	TheaterTypeLarge:  "10:20",
}

func TheaterLoop(TheaterType int) map[string]map[string]struct{} {
	sizes := strings.Split(theater[TheaterType], ":")
	x, _ := strconv.Atoi(sizes[0])
	y, _ := strconv.Atoi(sizes[1])
	r := make(map[string]map[string]struct{})
	for i := 0; i < x; i++ {
		rr := make(map[string]struct{})
		for j := 0; j < y; j++ {
			rr[strconv.Itoa(j)] = struct{}{}
		}
		r[strconv.Itoa(i)] = rr
	}
	return r
}
