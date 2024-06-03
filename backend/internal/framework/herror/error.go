package herror

import "errors"

var (
	ErrNoChange         = errors.New("no change")
	ErrResourceNotFound = errors.New("resource not found")
)
