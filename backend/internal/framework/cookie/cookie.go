package cookie

import (
	"net/http"
	"time"
)

type CookieOptions struct {
	MaxAge   int
	Path     string
	SameSite http.SameSite
	Secure   bool
	Httponly bool
}

func DefaultCookieOptions() CookieOptions {
	return CookieOptions{
		MaxAge:   int(time.Now().Unix()) + 10*365*24*3600,
		Path:     "/",
		SameSite: http.SameSiteNoneMode,
		Secure:   true,
		Httponly: true,
	}
}

type GinCoockieSetter struct {
	CookieOptions CookieOptions
}

func NewGinCoockieSetter(option CookieOptions) *GinCoockieSetter {
	return &GinCoockieSetter{
		CookieOptions: option,
	}
}
