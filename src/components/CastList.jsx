// src/components/CastList.jsx
import './CastList.css';

function CastList({ cast }) {
  const castBaseUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <div className="cast-section">
      <h3>Top Billed Cast</h3>
      <div className="cast-list">
        {cast.slice(0, 10).map(actor => ( // نمایش ۱۰ بازیگر اول
          <div key={actor.cast_id} className="cast-member">
            <img 
              src={actor.profile_path ? castBaseUrl + actor.profile_path : 'https://via.placeholder.com/200x300'} 
              alt={actor.name} 
            />
            <p className="actor-name">{actor.name}</p>
            <p className="character-name">{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CastList;
