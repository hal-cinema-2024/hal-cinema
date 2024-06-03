package repository

import (
	"context"

	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob"
	"github.com/hal-cinema-2024/backend/cmd/config"
)

type AzureBlob struct {
	client *azblob.Client
}

func NewAzureBlob() *AzureBlob {
	return &AzureBlob{}
}

// Upload to data to blob storage
func (r *AzureBlob) UploadBlob(ctx context.Context, blobName string, data []byte) (string, error) {
	var imagePath string = config.Config.Azure.BlobServiceURL + config.Config.Azure.BlobServiceImagePath + "/" + blobName
	var containerName string = config.Config.Azure.BlobServiceImagePath
	_, err := r.client.UploadBuffer(ctx, containerName, blobName, data, &azblob.UploadBufferOptions{})
	if err != nil {
		return "", err
	}
	return imagePath, nil
}
