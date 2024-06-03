package dai

import (
	"context"
	"io"
)

type StorageRepo interface {
	UploadBlob(ctx context.Context, containerName, blobName string, data io.Reader) (string, error)
}

type ParallelGetPresignedObjectURLInput struct {
	MovieID string
	Key     string
}
