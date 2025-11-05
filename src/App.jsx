import { Routes, Route } from 'react-router-dom'; // ایمپورت کردن
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from './pages/AboutPages';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage'; 

import "./App.css";

function App() {
  

  return (
     <div className="app-container">
      <Header />
      <div className="content">
        <Routes> {/* تعریف محل نمایش صفحات */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
