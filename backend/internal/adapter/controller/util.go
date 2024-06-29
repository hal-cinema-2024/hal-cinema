package controller

import "time"

func str2date(t string) (time.Time, error) {
	// YYYY-MM-DDTHH:MM:SSZZZZの形式で渡される文字列tをtime.Time型に変換して返す
	parsedTime, err := time.Parse("2006-01-02", t)
	if err != nil {
		return time.Time{}, err
	}

	return parsedTime, nil
}

func str2time(s string) (time.Time, error) {
	parsedTime, err := time.Parse("2006-01-02 15:04:05", s)
	if err != nil {
		return time.Time{}, err
	}

	return parsedTime, nil
}
