import MovieCard from './MovieCard';
import './MovieList.css'; // فایل استایل جدید

function MovieList(props) {
    const movies = props.movies
  return (
   <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.id} // کلید منحصر به فرد
          title={movie.title} // ارسال عنوان به عنوان prop
          year={movie.year} // ارسال سال به عنوان prop
          poster={movie.poster} // ارسال پوستر به عنوان prop
        />
      ))}
    </div>

  );
}

export default MovieList;
