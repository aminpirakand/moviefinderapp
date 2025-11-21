// src/context/FavoritesContext.jsx
import { createContext, useContext,useReducer } from 'react';
const actionTypes = {
  ADD: 'ADD_FAVORITE',
  REMOVE: 'REMOVE_FAVORITE',
  CLEAR: 'CLEAR_FAVORITES', // نوع اکشن جدید
};

// ۱. ساخت تابع Reducer
function favoritesReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD: {
      // جلوگیری از افزودن فیلم تکراری
      if (state.find(movie => movie.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];
    }
    case actionTypes.REMOVE: {
      return state.filter(movie => movie.id !== action.payload);
    }
    case actionTypes.CLEAR: {
      return []; // بازگرداندن یک آرایه خالی به عنوان وضعیت جدید
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// ۱. ساخت کانتکست
const FavoritesContext = createContext();

// ۲. ساخت کامپوننت Provider
export function FavoritesProvider({ children }) {
  // ۲. استفاده از useReducer به جای useState
  const [favorites, dispatch] = useReducer(favoritesReducer, []); // مقدار اولیه یک آرایه خالی است

  // ۳. بازنویسی توابع برای استفاده از dispatch
  const addFavorite = (movie) => {
    dispatch({ type: actionTypes.ADD, payload: movie });
  };

  const removeFavorite = (movieId) => {
    dispatch({ type: actionTypes.REMOVE, payload: movieId });
  };

  const value = { favorites,dispatch };

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
