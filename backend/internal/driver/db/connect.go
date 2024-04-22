package db

import (
	"database/sql"
	"fmt"
	"log"
	"time"

	"github.com/XSAM/otelsql"
	"github.com/hal-cinema-2024/backend/cmd/config"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/stdlib"
)

func Connect() *sql.DB {
	dsn := fmt.Sprintf(
		"user=%s password=%s host=%s port=%d database=%s sslmode=disable",
		config.Config.Database.User,
		config.Config.Database.Password,
		config.Config.Database.Host,
		config.Config.Database.Port,
		config.Config.Database.Name,
	)

	var db *sql.DB
	pgxConfig, err := pgx.ParseConfig(dsn)
	if err != nil {
		log.Fatalf("Error parsing config: %s", err)
	}
	conn := stdlib.GetConnector(*pgxConfig)
	if config.Config.Otel.IsUse {
		db = otelsql.OpenDB(conn,
			otelsql.WithSpanOptions(otelsql.SpanOptions{
				Ping:                 false,
				OmitConnResetSession: true,
				OmitConnPrepare:      true,
				OmitRows:             true,
				OmitConnectorConnect: true,
			}))
	} else {
		db = sql.OpenDB(conn)
	}

	const maxRetries = 3
	const retryDelay = 2 * time.Second

	for i := 1; i <= maxRetries; i++ {
		err = db.Ping()
		if err == nil {
			break
		}

		log.Printf("Error pinging DB (Attempt %d/%d): %s\n", i, maxRetries, err)

		if i < maxRetries {
			time.Sleep(retryDelay)
		}
	}

	if err != nil {
		log.Fatalf("Exceeded maximum retries: Error pinging DB: %s", err)
	}

	return db
}
