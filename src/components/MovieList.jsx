import MovieCard from './MovieCard';
import './MovieList.css'; // فایل استایل جدید

function MovieList(props) {
    const movies = props.movies
  return (
   <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.id} // کلید منحصر به فرد
           movie={movie} 
           />
      ))}
    </div>

  );
}

export default MovieList;
