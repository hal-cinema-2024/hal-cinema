package repository

import (
	"bytes"
	"context"
	"net/http"
	"sync"
	"time"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

type CloudflareR2 struct {
	client        *s3.Client
	PresignClient *s3.PresignClient
	bucket        string
	Config        Config
}

type Config struct {
	PresignLinkExpired time.Duration
}

func NewCloudflareR2(bucket string, client *s3.Client, presignLinkExpired int) *CloudflareR2 {
	return &CloudflareR2{
		bucket:        bucket,
		client:        client,
		PresignClient: s3.NewPresignClient(client),
		Config: Config{
			// デフォルト30分のはず
			PresignLinkExpired: time.Duration(presignLinkExpired) * time.Minute,
		},
	}
}

func checkContentType(file []byte) string {
	return http.DetectContentType(file)
}

func (c *CloudflareR2) ListObjects(ctx context.Context, key string) (*s3.ListObjectsV2Output, error) {

	return c.client.ListObjectsV2(ctx, &s3.ListObjectsV2Input{
		Bucket: aws.String(c.bucket),
		Prefix: aws.String(key),
	})
}

func (c *CloudflareR2) GetPresignedObjectURL(ctx context.Context, key string) (string, error) {
	object, err := c.PresignClient.PresignGetObject(ctx, &s3.GetObjectInput{
		Bucket:          aws.String(c.bucket),
		Key:             aws.String(key),
		ResponseExpires: aws.Time(time.Now().Add(c.Config.PresignLinkExpired * time.Hour)),
	})
	if err != nil {
		return "", err
	}
	return object.URL, nil
}

func (c *CloudflareR2) UploadFile(ctx context.Context, file []byte, key string) (string, error) {

	_, err := c.client.PutObject(ctx, &s3.PutObjectInput{
		Bucket:        aws.String(c.bucket),
		Key:           aws.String(key),
		Body:          bytes.NewReader(file),
		ContentLength: aws.Int64(int64(len(file))),
		ContentType:   aws.String(checkContentType(file)),
	})

	return key, err
}

func (c *CloudflareR2) DeleteFile(ctx context.Context, fileName string) error {

	_, err := c.client.DeleteObject(ctx, &s3.DeleteObjectInput{
		Bucket: aws.String(c.bucket),
		Key:    aws.String(fileName),
	})
	return err
}

func (c *CloudflareR2) ParallelGetPresignedObjectURL(ctx context.Context, input []dai.ParallelGetPresignedObjectURLInput) (map[string]string, error) {

	type resultCh struct {
		movieID string
		url     string
	}

	var (
		output = make(map[string]string, len(input))
		ch     = make(chan resultCh, len(input))
		wg     sync.WaitGroup
	)
	defer close(ch)

	for _, in := range input {
		wg.Add(1)
		go func(in dai.ParallelGetPresignedObjectURLInput) {
			defer wg.Done()
			url, err := c.GetPresignedObjectURL(ctx, in.Key)
			if err != nil {
				ch <- resultCh{
					movieID: in.MovieID,
					url:     "",
				}
			} else {
				ch <- resultCh{
					movieID: in.MovieID,
					url:     url,
				}
			}
		}(in)
	}

	wg.Wait()

	for range input {
		result := <-ch
		output[result.hackathonID] = result.url
	}

	return output, nil
}
