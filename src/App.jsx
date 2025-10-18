import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList'; 
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <MovieList /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
