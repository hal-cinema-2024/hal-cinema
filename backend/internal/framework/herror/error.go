package herror

import "errors"

var (
	ErrNoChange         = errors.New("no change")
	ErrResourceNotFound = errors.New("resource not found")
	ErrSessionExpired   = errors.New("session expired")
)
