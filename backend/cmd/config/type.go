package config

var Config *config

type config struct {
	App struct {
		Addr string `env:"BACKEND_SERVER_ADDR" envDefault:":8080"`
	}

	Database struct {
		Host     string `env:"DATABASE_HOST"`
		Port     int    `env:"DATABASE_PORT"`
		User     string `env:"DATABASE_USER"`
		Password string `env:"DATABASE_PASSWORD"`
		Name     string `env:"DATABASE_NAME"`
	}

	Otel struct {
		IsUse bool `env:"OTEL_USE"`
	}
}
