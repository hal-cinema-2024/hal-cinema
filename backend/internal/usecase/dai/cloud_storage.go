package dai

import (
	"context"
)

type StorageRepo interface {
	UploadBlob(ctx context.Context, blobName string, data []byte) (string, error)
}

type ParallelGetPresignedObjectURLInput struct {
	MovieID string
	Key     string
}
