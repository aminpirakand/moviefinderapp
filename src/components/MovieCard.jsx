import React from 'react'

function MovieCard(props) {
  

  return (
    <div className="movie-card">
      <img src={props.poster} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.year}</p>
    </div>
  );

}

export default MovieCard