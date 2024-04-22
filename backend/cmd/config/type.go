package config

var Config *config

type config struct {
	App struct {
		Addr string `env:"SERVER_ADDR" envDefault:":8080"`
		Env  string `env:"ENV"`
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

	Cloudflare struct {
		AccountID       string `env:"CLOUDFLARE_ACCOUNT_ID"`
		Endpoint        string `env:"CLOUDFLARE_ENDPOINT"`
		AccessKeyID     string `env:"CLOUDFLARE_ACCESS_KEY_ID"`
		AccessKeySecret string `env:"CLOUDFLARE_ACCESS_KEY_SECRET"`
		BucketName      string `env:"CLOUDFLARE_BUCKET_NAME"`
		Region          string `env:"CLOUDFLARE_REGION"`
	}
}
