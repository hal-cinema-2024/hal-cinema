package azure

import (
	"context"

	"github.com/Azure/azure-sdk-for-go/sdk/azidentity"
	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob"
	"github.com/hal-cinema-2024/backend/cmd/config"
	"github.com/hal-cinema-2024/backend/pkg/log"

	"github.com/Azure/azure-sdk-for-go/sdk/azcore"
)

func NewAzureCert() *azidentity.DefaultAzureCredential {
	ctx := context.Background()
	cred, err := azidentity.NewDefaultAzureCredential(nil)
	if err != nil {
		log.Fatal(ctx, "failed to create default credential", "error", err)
	}

	return cred
}

func NewBlobClient(credential azcore.TokenCredential) *azblob.Client {
	bclient, err := azblob.NewClient(config.Config.Azure.BlobServiceURL, credential, &azblob.ClientOptions{})
	if err != nil {
		log.Fatal(context.Background(), "failed to create blob client", "error", err)
	}
	return bclient
}
