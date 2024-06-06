package dai

import "context"

type CloudStorage interface {
	UploadBlob(ctx context.Context, fileNmae string, fileData []byte) (string, error)
}
