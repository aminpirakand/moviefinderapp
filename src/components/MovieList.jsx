import MovieCard from './MovieCard';
import './MovieList.css'; // فایل استایل جدید

function MovieList() {
  return (
    <div className="movie-list">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}

export default MovieList;
