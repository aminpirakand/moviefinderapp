// src/pages/MovieDetailsPage.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import CastList from "../components/CastList";

function MovieDetailsPage() {
  const navigate = useNavigate(); // دریافت تابع navigate
  const params = useParams(); // فراخوانی هوک
  // برای مسیر /movie/123، مقدار params خواهد بود: { movieId: '123' }
  const movieId = params.movieId;
  const [cast, setCast] = useState([]); 
  const [movie, setMovie] = useState(null); // State برای نگهداری جزئیات فیلم
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "2f5eff245e0b1e1b32a37093a95db62c";
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
     // ارسال همزمان هر دو درخواست
    Promise.all([fetch(movieUrl), fetch(creditsUrl)])
      .then(async ([movieRes, creditsRes]) => {
        if (!movieRes.ok || !creditsRes.ok) {
          throw new Error('Failed to fetch data');
        }
        const movieData = await movieRes.json();
        const creditsData = await creditsRes.json();
        return [movieData, creditsData];
      })
      .then(([movieData, creditsData]) => {
        setMovie(movieData);
        setCast(creditsData.cast); // ذخیره لیست بازیگران
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [movieId]);
 // <<<< مهم: useEffect به movieId وابسته است

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <button onClick={() => navigate(-1)} className="back-button">
        &larr; Back
      </button>

      <div className="movie-details-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-details-poster"
        />
        <div className="movie-details-info">
          <h1>
            {movie.title} ({movie.release_date.substring(0, 4)})
          </h1>
          <p className="tagline">
            <em>{movie.tagline}</em>
          </p>
          <p>
            <strong>Rating:</strong> ⭐️ {movie.vote_average.toFixed(1)} / 10
          </p>
          <div className="genres">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            ))}
          </div>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
      {cast.length > 0 && <CastList cast={cast} />} 
    </>
  );
}
export default MovieDetailsPage;
