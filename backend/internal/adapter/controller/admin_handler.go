package controller

import (
	"log"

	"github.com/labstack/echo/v4"
)

type AdminHandler func(ctx echo.Context) error

func (h AdminHandler) AsAdmin() echo.HandlerFunc {
	return func(ctx echo.Context) error {
		// TODO: RBACを実装した後、権限と突合しAdmin以上なら許可する
		log.Println(ctx.Request().URL.Path)
		return h(ctx)
	}
}
