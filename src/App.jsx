import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList'; 
import './App.css';

function App() {
  const initialMovies = [
  { id: 1, title: 'Inception', year: 2010, poster: 'https://picsum.photos/id/1/200/300' },
  { id: 2, title: 'The Shawshank Redemption', year: 1994, poster: 'https://picsum.photos/id/1/200/300' },
  { id: 3, title: 'The Dark Knight', year: 2008, poster: 'https://picsum.photos/id/1/200/300' },
  { id: 4, title: 'Pulp Fiction', year: 1994, poster: 'https://picsum.photos/id/1/200/300' },
  { id: 5, title: 'Forrest Gump', year: 1994, poster: 'https://picsum.photos/id/1/200/300' }
];

  return (
    <div className="app-container">
      <Header />
      <main>
        <MovieList movies={initialMovies} /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
