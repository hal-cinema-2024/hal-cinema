package cloudflare

import (
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	awsconfig "github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/hal-cinema-2024/backend/cmd/config"
)

func ConnectR2Bucket() *s3.Client {
	cfg, err := awsconfig.LoadDefaultConfig(
		context.Background(),
		awsconfig.WithEndpointResolverWithOptions(newResolver()),
		awsconfig.WithCredentialsProvider(
			credentials.NewStaticCredentialsProvider(
				config.Config.Cloudflare.AccessKeyID,
				config.Config.Cloudflare.AccessKeySecret,
				"",
			),
		),
		awsconfig.WithRegion(config.Config.Cloudflare.Region),
	)
	if err != nil {
		panic(err)
	}

	return s3.NewFromConfig(cfg)
}

func newResolver() aws.EndpointResolverWithOptions {
	return aws.EndpointResolverWithOptionsFunc(
		func(service, region string, options ...interface{}) (aws.Endpoint, error) {
			return aws.Endpoint{
				URL:               fmt.Sprintf("https://%s.%s", config.Config.Cloudflare.AccountID, config.Config.Cloudflare.Endpoint),
				HostnameImmutable: true,
				Source:            aws.EndpointSourceCustom,
			}, nil
		})
}
