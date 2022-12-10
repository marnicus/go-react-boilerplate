package repository

import (
	"context"
	"time"
)

type Auth struct {
	ID      string
	Username int64
	Email    string
	Password   string
	CreatedAt time.Time
}

type AuthRepository interface {
	LoginUser(ctx context.Context, email string, password string)(Auth, error)
}
