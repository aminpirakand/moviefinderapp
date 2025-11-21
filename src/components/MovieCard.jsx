// src/components/MovieCard.jsx
import { memo } from 'react'; // ۱. ایمپورت کردن memo
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

// دریافت props
const MovieCard = memo(function MovieCard({ movie, onActionClick, actionLabel}) {
   console.log(`Rendering MovieCard: ${movie.title}`); // برای تست کردن رندرها
  const [isLiked, setIsLiked] = useState(false);
  // State جدید برای شمارش بازدیدها
  const [viewCount, setViewCount] = useState(0);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  const handleViewClick = () => {
    setViewCount(viewCount + 1);
  };
    const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const posterUrl = movie.poster_path ? posterBaseUrl + movie.poster_path : 'https://via.placeholder.com/200x300';

  return (
    <div className="movie-card-container">
    <div className="movie-card">
    <Link to={`/movie/${movie.id}`} className="movie-card-link">

     <img src={posterUrl} alt={movie.title} />
      </Link>
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date}</p>
      <p>⭐️ {movie.vote_average.toFixed(1)}</p> {/* رند کردن امتیاز */}
      <div className="actions">
        <button onClick={handleLikeClick} className={isLiked ? 'like-btn liked' : 'like-btn'}>
          {isLiked ? '❤️ Liked' : '🤍 Like'}
        </button>
        <button onClick={handleViewClick} className="view-btn">
          Viewed ({viewCount})
        </button>
      </div>
    </div>
   
   
    {onActionClick && (
        <button onClick={() => onActionClick(movie.id)} className="action-btn">
          {actionLabel}
        </button>
      )}
    </div>
  );
})

export default MovieCard;