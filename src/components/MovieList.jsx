import MovieCard from './MovieCard';
import './MovieList.css'; // فایل استایل جدید

function MovieList({ movies, onActionClick, actionLabel }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard 
        key={movie.id}
        movie={movie} 
        onActionClick={onActionClick} 
        actionLabel={actionLabel} />
      ))}
    </div>
  );
}


export default MovieList;
