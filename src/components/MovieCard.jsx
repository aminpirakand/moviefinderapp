// src/components/MovieCard.jsx
import { memo } from "react"; // ۱. ایمپورت کردن memo
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./MovieCard.css";

const CardWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  border: 1px solid red;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }
`;

const PosterImage = styled.img`
  width: 100%;
  height: auto;
  display: block;`;

const CardInfo = styled.div`
  padding: 1rem;
`;
const CardTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
`;

// دریافت props
const MovieCard = memo(function MovieCard({
  movie,
  onActionClick,
  actionLabel,
}) {
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
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
  const posterUrl = movie.poster_path
    ? posterBaseUrl + movie.poster_path
    : "https://via.placeholder.com/200x300";

  return (
    <div className="movie-card-container">
      <div className="movie-card">
        <CardWrapper to={`/movie/${movie.id}`}>
          <PosterImage src={posterUrl} alt={movie.title} />
          <CardInfo>
            <CardTitle>{movie.title}</CardTitle>
            <p>⭐️ {movie.vote_average.toFixed(1)}</p>
          </CardInfo>
        </CardWrapper>
        {/* رند کردن امتیاز */}
        <div className="actions">
          <button
            onClick={handleLikeClick}
            className={isLiked ? "like-btn liked" : "like-btn"}
          >
            {isLiked ? "❤️ Liked" : "🤍 Like"}
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
});

export default MovieCard;
