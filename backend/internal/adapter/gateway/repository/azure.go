package repository

import (
	"context"
	"log"

	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob"
	"github.com/hal-cinema-2024/backend/cmd/config"
)

type AzureBlobRepo struct {
	client *azblob.Client
}

func NewAzureBlobRepo(Client *azblob.Client) *AzureBlobRepo {
	return &AzureBlobRepo{
		client: Client,
	}
}

// Upload to data to blob storage
func (a *AzureBlobRepo) UploadBlob(ctx context.Context, blobName string, data []byte) (string, error) {
	var containerName string = config.Config.Azure.BlobServiceContainerName
	var imagePath string = config.Config.Azure.BlobServiceURL + config.Config.Azure.BlobServiceContainerName + "/" + blobName
	// ここで煮るぽになったからlogにだす
	log.Println("UploadBlob")
	log.Println(imagePath)
	log.Println(blobName)
	res, err := a.client.UploadBuffer(ctx, containerName, blobName, data, &azblob.UploadBufferOptions{})
	if err != nil {
		return "", err
	}
	log.Println(res)
	return imagePath, nil
}

// delete blob from blob storage
func (r *AzureBlobRepo) DeleteBlob(ctx context.Context, blobName string) error {
	var containerName string = config.Config.Azure.BlobServiceContainerName
	_, err := r.client.DeleteBlob(ctx, containerName, blobName, &azblob.DeleteBlobOptions{})
	if err != nil {
		return err
	}
	return nil
}
