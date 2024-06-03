package repository

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"gorm.io/gorm"
)

type MovieRepo struct {
	db *gorm.DB
}

func NewMovieRepo(gorm *gorm.DB) *MovieRepo {
	return &MovieRepo{
		db: gorm,
	}
}

func (r *MovieRepo) CreateMovie(ctx context.Context, movie *model.Movie, imagePaths []string) (string, error) {
	result := r.db.Create(&movie)
	if result.Error != nil {
		return "", result.Error
	}
	// 追加画像のパスを保存
	for _, imagePath := range imagePaths {
		result := r.db.Create(&model.MovieImage{
			MovieID:  movie.MovieID,
			FilePath: imagePath,
		})
		if result.Error != nil {
			return "", result.Error
		}
	}
	return movie.MovieID, nil
}

func (r *MovieRepo) GetMovieByID(ctx context.Context, movieID string) (*model.Movie, error) {
	var movie model.Movie
	result := r.db.Model(&movie).Where("movie_id = ?", movieID).Find(&movie)
	if result.Error != nil {
		return nil, result.Error
	}
	return &movie, nil
}

func (r *MovieRepo) GetMovies(ctx context.Context) ([]*model.Movie, error) {
	var movies []*model.Movie
	result := r.db.Find(&movies)
	if result.Error != nil {
		return nil, result.Error
	}
	return movies, nil
}

func (r *MovieRepo) UpdateMovie(ctx context.Context, movie *model.Movie) (string, error) {
	result := r.db.Save(movie)
	if result.Error != nil {
		return "", result.Error
	}
	return "", nil
}

// logical deletion
func (r *MovieRepo) DeleteMovie(ctx context.Context, movieID string) (string, error) {
	result := r.db.Save(&model.Movie{MovieID: movieID, IsDelete: true})
	if result.Error != nil {
		return "", result.Error
	}
	return "", nil
}
