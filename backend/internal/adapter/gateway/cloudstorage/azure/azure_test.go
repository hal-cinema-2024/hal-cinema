package azure_test

import (
	"context"
	"io"
	"os"
	"testing"

	"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob"
	"github.com/google/uuid"
	"github.com/hal-cinema-2024/backend/internal/adapter/gateway/cloudstorage/azure"
	"github.com/hal-cinema-2024/backend/internal/test"
)

func invoke[T any]() (T, error) {
	var i T
	if err := test.Invoke(func(d T) {
		i = d
	}); err != nil {
		return i, err
	}
	return i, nil
}

func TestUpload(t *testing.T) {
	if err := test.LoadEnv(); err != nil {
		t.Fatal("failed to load env", err)
	}

	if err := test.NewContainer(t); err != nil {
		t.Fatal("failed to create container", err)
	}

	bclient, err := invoke[*azblob.Client]()
	if err != nil {
		t.Fatal("failed to invoke *azblob.client", err)
	}

	testFileName := "test.jpg"
	file, err := os.Open(testFileName)
	if err != nil {
		t.Fatal("failed to open file", err)
	}

	data, err := io.ReadAll(file)
	if err != nil {
		t.Fatal("failed to read file", err)
	}

	azRepo := azure.NewAzureCloudStorage(bclient)

	dataPath, err := azRepo.UploadBlob(context.Background(), uuid.NewString()+"-"+testFileName, data)
	if err != nil {
		t.Fatal("failed to upload blob", err)
	}

	t.Log("dataPath", dataPath)
}
