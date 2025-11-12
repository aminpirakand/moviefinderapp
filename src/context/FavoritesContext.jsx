// src/context/FavoritesContext.jsx
import { createContext, useState, useContext } from 'react';

// ۱. ساخت کانتکست
const FavoritesContext = createContext();

// ۲. ساخت کامپوننت Provider
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavorite = (movieId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(movie => movie.id !== movieId));
  };

  const value = { favorites, addFavorite, removeFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

// ۳. ساخت یک هوک سفارشی برای استفاده آسان‌تر
export function useFavorites() {
  return useContext(FavoritesContext);
}
