package v1

import "github.com/hal-cinema-2024/backend/internal/controller/login"

func (v1 *v1Router) login() {
	// TODO: diしてInvokeしてnil から変更する
	v1.engine.POST("/login/google", login.GoogleLogin(nil))
}
