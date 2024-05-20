package login

import (
	"log"
	"net/http"

	"github.com/hal-cinema-2024/backend/internal/framework/hcontext"
	"github.com/hal-cinema-2024/backend/internal/usecase/google"
	"github.com/labstack/echo/v4"
)

type LoginRequest struct {
	AuthorizationCode string `json:"authorizationCode"`
}

type LoginResponse struct {
	UserID string `json:"userId"`
}

func GoogleLogin(googleLogin *google.Login) func(ctx echo.Context) error {
	return func(ctx echo.Context) error {
		var reqBody LoginRequest
		if err := ctx.Bind(&reqBody); err != nil {
			log.Println("[ERROR] bad request")
			return echo.ErrBadRequest
		}

		userInfo, err := googleLogin.Login(ctx.Request().Context(), reqBody.AuthorizationCode)
		if err != nil {
			log.Println("[ERROR] ", err)
			return echo.ErrInternalServerError
		}

		ctx.Set(hcontext.UserID.String(), userInfo.UserID)

		// TODO: Cookie Sessionを作る

		return ctx.JSON(http.StatusOK, &LoginResponse{
			UserID: userInfo.UserID,
		})
	}
}
