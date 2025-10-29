import { useState } from 'react';
import React from 'react'

function MovieCard({movie}) {
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const posterUrl = movie.poster_path ? posterBaseUrl + movie.poster_path : 'https://via.placeholder.com/200x300';

  const [isLiked, setIsLiked] = useState(false);
  // State جدید برای شمارش بازدیدها
  const [viewCount, setViewCount] = useState(0);


  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  // Event handler جدید برای افزایش شمارنده
  const handleViewClick = () => {
    setViewCount(viewCount + 1);
  };


  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <p> {movie.vote_average.toFixed(1)}</p>
      <button onClick={handleLikeClick} className={isLiked ? 'like-btn liked' : 'like-btn'}>
      {isLiked ? '❤️ Liked' : '🤍 Like'}
      </button>

      <button onClick={handleViewClick} className="view-btn">
        Viewed ({viewCount})
      </button>


    </div>
  );

}

export default MovieCard