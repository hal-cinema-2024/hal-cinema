package azure

import (
	"context"
	"fmt"
	"strings"

	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob"
	"github.com/hal-cinema-2024/backend/cmd/config"
)

type AzureCloudStorage struct {
	bclient *azblob.Client
}

func NewAzureCloudStorage(bclient *azblob.Client) *AzureCloudStorage {
	return &AzureCloudStorage{bclient: bclient}
}

func (cs *AzureCloudStorage) UploadBlob(ctx context.Context, fileName string, fileData []byte) (string, error) {
	_, err := cs.bclient.UploadBuffer(ctx, config.Config.Azure.BlobServiceContainerName, fileName, fileData, &azblob.UploadBufferOptions{})
	if err != nil {
		return "", err
	}
	return fmt.Sprintf("%s%s/%s", config.Config.Azure.BlobServiceURL, config.Config.Azure.BlobServiceContainerName, fileName), nil
}

// delete blob from blob storage
func (cs *AzureCloudStorage) DeleteBlob(ctx context.Context, blobName string) error {
	var containerName string = config.Config.Azure.BlobServiceContainerName
	target := config.Config.Azure.BlobServiceURL + containerName + "/"
	fileName := strings.Replace(blobName, target, "", -1)
	_, err := cs.bclient.DeleteBlob(ctx, containerName, fileName, &azblob.DeleteBlobOptions{})
	if err != nil {
		return err
	}
	return nil
}
