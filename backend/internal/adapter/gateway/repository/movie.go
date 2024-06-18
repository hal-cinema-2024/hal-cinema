package repository

import (
	"context"

	"github.com/hal-cinema-2024/backend/internal/entities/model"
	"github.com/hal-cinema-2024/backend/internal/usecase/dai"
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

var _ dai.MovieRepo = (*MovieRepo)(nil)

func (r *MovieRepo) CreateMovie(ctx context.Context, movie *model.Movie, imagePaths []string) (string, error) {
	movieImage := []*model.MovieImage{}
	result := r.db.Create(&movie)
	if result.Error != nil {
		return "", result.Error
	}

	// 追加画像のパスを保存
	for _, imagePath := range imagePaths {
		movieImage = append(movieImage, &model.MovieImage{
			MovieID:  movie.MovieID,
			FilePath: imagePath,
		})
	}
	if len(movieImage) > 0 {
		result = r.db.Create(movieImage)
		if result.Error != nil {
			return "", result.Error
		}
	}

	return movie.MovieID, nil
}

func (r *MovieRepo) GetMovieByID(ctx context.Context, movieID string) (*model.Movie, []string, error) {
	var movie model.Movie
	var movieImages []model.MovieImage
	result := r.db.Model(&movie).Where("movie_id = ?", movieID).Find(&movie)
	if result.Error != nil {
		return nil, nil, result.Error
	}
	result = r.db.Model(&model.MovieImage{}).Where("movie_id = ?", movieID).Find(&movieImages)
	if result.Error != nil {
		return nil, nil, result.Error
	}
	var imagePaths []string
	for _, movieImage := range movieImages {
		imagePaths = append(imagePaths, movieImage.FilePath)
	}
	return &movie, imagePaths, nil
}

func (r *MovieRepo) GetMovies(ctx context.Context, limit int, offset int) ([]*model.Movie, error) {
	var movies []*model.Movie
	result := r.db.Where("is_delete = ?", false).Limit(limit).Offset(limit * (offset - 1)).Find(&movies)
	if result.Error != nil {
		return nil, result.Error
	}
	return movies, nil
}

func (r *MovieRepo) UpdateMovie(ctx context.Context, movie *model.Movie, imagePaths []string) error {
	movieImages := []model.MovieImage{}
	pastData, _, err := r.GetMovieByID(ctx, movie.MovieID)
	if err != nil {
		return err
	}
	if movie.Name != "" {
		pastData.Name = movie.Name
	}
	if movie.Director != "" {
		pastData.Director = movie.Director
	}
	if movie.Summary != "" {
		pastData.Summary = movie.Summary
	}
	if movie.ThumbnailPath != "" {
		pastData.ThumbnailPath = movie.ThumbnailPath
	}
	if movie.Link != "" {
		pastData.Link = movie.Link
	}
	if movie.Term != 0 {
		pastData.Term = movie.Term
	}
	if !movie.ReleaseDate.IsZero() {
		pastData.ReleaseDate = movie.ReleaseDate
	}
	if !movie.EndDate.IsZero() {
		pastData.EndDate = movie.EndDate
	}

	result := r.db.Model(&movie).Where("movie_id = ?", movie.MovieID).Updates(&pastData)
	if result.Error != nil {
		return result.Error
	}

	// 画像の更新
	result = r.db.Model(&movieImages).Where("movie_id = ?", movie.MovieID).Find(&movieImages)
	if result.Error != nil {
		return result.Error
	}
	for _, imagePath := range imagePaths {
		movieImages = append(movieImages, model.MovieImage{
			MovieID:  movie.MovieID,
			FilePath: imagePath,
		})
	}
	return nil
}

// logical deletion
func (r *MovieRepo) DeleteMovie(ctx context.Context, movieID string) error {
	var movie model.Movie
	result := r.db.Model(&movie).Where("movie_id = ?", movieID).Update("is_delete", true)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
