package hcontext

type ContextKey string

const (
	UserID    ContextKey = "hal_ciname_user_id"
	UserAgent ContextKey = "hal_ciname_user_agent"
)

func (c ContextKey) String() string {
	return string(c)
}
