import { useState,useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import LoadingSpinner from './components/LoadingSpinner'; // ایمپورت کردن اسپینر
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]); // برای نگهداری فیلم‌ها
  const [isLoading, setIsLoading] = useState(true); // برای نمایش حالت لودینگ
  const [error, setError] = useState(null); // برای نمایش خطا
  const [searchTerm, setSearchTerm] = useState('');

  // داخل کامپوننت App
  useEffect(() => {
    const apiKey = "2f5eff245e0b1e1b32a37093a95db62c"; // کلید API خود را اینجا قرار دهید
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong. Please try again later.");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.results); // داده‌های فیلم در results قرار دارند
        setIsLoading(false); // بارگذاری تمام شد
      })
      .catch((error) => {
        setError(error.message); // ذخیره پیام خطا
        setIsLoading(false); // بارگذاری تمام شد (با خطا)
      });
  }, []); // آرایه خالی یعنی فقط یک بار اجرا شود
  if (isLoading) {
  return <LoadingSpinner/>;
}

if (error) {
  return <div className="error-message">Error: {error} 😞</div>;
}

const filteredMovies = movies.filter(movie =>
  movie.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="app-container">
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <main>
       {filteredMovies.length > 0 ? (
    <MovieList movies={filteredMovies} />
  ) : (
    <p className="no-results">No movies found matching your search. 😕</p>
  )}

      </main>
      <Footer />
    </div>
  );
}

export default App;
