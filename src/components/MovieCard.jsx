import { useState } from 'react';
import React from 'react'

function MovieCard({poster,title,year,rating}) {
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
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p>{year}</p>
      <p>{rating}</p>
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