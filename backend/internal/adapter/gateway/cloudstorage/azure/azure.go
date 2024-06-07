package azure

import (
	"context"
	"fmt"

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
