package repository

import (
	"context"

	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob"
)

type AzureBlob struct {
	client *azblob.Client
}

// Upload to data to blob storage
func (r *AzureBlob) UploadBlob(ctx context.Context, containerName, blobName string, data []byte) (string, error) {
	_, err := r.client.UploadBuffer(ctx, containerName, blobName, data, &azblob.UploadBufferOptions{})
	if err != nil {
		return "", err
	}
	return blobName, nil
}
