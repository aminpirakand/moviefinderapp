import { Routes, Route } from 'react-router-dom'; // ایمپورت کردن
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from './pages/AboutPages';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage'; 
import { FavoritesProvider } from './context/FavoritesContext'; 
import FavoritesPage from './pages/FavoritesPage'; 

import "./App.css";

function App() {
  

  return (
        <FavoritesProvider> 
     <div className="app-container">
      <Header />
      <div className="content">
        <Routes> {/* تعریف محل نمایش صفحات */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} /> 
        </Routes>
      </div>
      <Footer />
    </div>
</FavoritesProvider>
  );
}

export default App;
