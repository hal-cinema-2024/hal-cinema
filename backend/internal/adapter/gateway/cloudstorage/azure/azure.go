package azure

import (
	"context"
	"fmt"
	"strings"

	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob"
	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/cmd/config"
)

type AzureCloudStorage struct {
	bclient *azblob.Client
}

func NewAzureCloudStorage(bclient *azblob.Client) *AzureCloudStorage {
	return &AzureCloudStorage{bclient: bclient}
}

func (cs *AzureCloudStorage) UploadBlob(ctx context.Context, fileName string, fileData []byte) (string, error) {
	uuid, err := uuid.NewV7()
	if err != nil {
		return "", err
	}
	fileName = fmt.Sprintf("%s-%s", uuid, fileName)
	_, err = cs.bclient.UploadBuffer(ctx, config.Config.Azure.BlobServiceContainerName, fileName, fileData, &azblob.UploadBufferOptions{})
	if err != nil {
		return "", err
	}
	return fmt.Sprintf("%s%s/%s", config.Config.Azure.BlobServiceURL, config.Config.Azure.BlobServiceContainerName, fileName), nil
}

// delete blob from blob storage
func (cs *AzureCloudStorage) DeleteBlob(ctx context.Context, blobName string) error {
	var containerName string = config.Config.Azure.BlobServiceContainerName
	var fileName string
	if strings.Contains(blobName, config.Config.Azure.BlobServiceURL) {
		target := config.Config.Azure.BlobServiceURL + containerName + "/"
		fileName = strings.Replace(blobName, target, "", -1)
	} else {
		fileName = blobName
	}
	_, err := cs.bclient.DeleteBlob(ctx, containerName, fileName, &azblob.DeleteBlobOptions{})
	if err != nil {
		return err
	}
	return nil
}
