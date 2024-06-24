package dai

import "context"

type CloudStorage interface {
	UploadBlob(ctx context.Context, fileName string, fileData []byte) (string, error)
}
