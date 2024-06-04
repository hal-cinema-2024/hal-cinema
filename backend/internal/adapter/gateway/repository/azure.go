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

var containerName string = config.Config.Azure.BlobServiceImagePath

// Upload to data to blob storage
func (r *AzureBlob) UploadBlob(ctx context.Context, blobName string, data []byte) (string, error) {
	var imagePath string = config.Config.Azure.BlobServiceURL + config.Config.Azure.BlobServiceImagePath + "/" + blobName
	_, err := r.client.UploadBuffer(ctx, containerName, blobName, data, &azblob.UploadBufferOptions{})
	if err != nil {
		return "", err
	}
	return imagePath, nil
}

// delete blob from blob storage
func (r *AzureBlob) DeleteBlob(ctx context.Context, blobName string) error {
	var containerName string = config.Config.Azure.BlobServiceImagePath
	_, err := r.client.DeleteBlob(ctx, containerName, blobName, &azblob.DeleteBlobOptions{})
	if err != nil {
		return err
	}
	return nil
}
