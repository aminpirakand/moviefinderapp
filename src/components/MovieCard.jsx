import React from 'react'

function MovieCard() {
  const movieTitle = "Inception";
  const movieYear = 2010;
  const moviePoster = "https://picsum.photos/id/1/200/300";

  return (
    <div className="movie-card">
      <img src={moviePoster} alt={movieTitle} />
      <h3>{movieTitle}</h3>
      <p>{movieYear}</p>
    </div>
  );

}

export default MovieCard