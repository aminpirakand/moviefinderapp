// src/pages/FavoritesPage.jsx
import { useFavorites  } from '../context/FavoritesContext';
import MovieList from '../components/MovieList';
function FavoritesPage() {
  const { favorites ,removeFavorite} = useFavorites();

  return (
    <div className="page-container">
      <h2>My Favorite Movies</h2>
      {favorites.length > 0 ? (
        <MovieList movies={favorites} onActionClick={removeFavorite} actionLabel="Remove"/>
      ) : (
        <p>You haven't added any movies to your favorites yet.</p>
      )}
    </div>
  );
}

export default FavoritesPage;
