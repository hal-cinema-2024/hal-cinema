package v1

func (v1 *v1Router) login() {
	v1.engine.POST("/login/google", nil)
}
