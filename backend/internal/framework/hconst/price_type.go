package hconst

type PriceType int32

func (p PriceType) Int32() int32 {
	return int32(p)
}

const (
	Adult PriceType = iota + 1
	CollegeStudent
	JuniorHigh_HighSchoolStudent
	ElementarySchoolStudent_Child
)
