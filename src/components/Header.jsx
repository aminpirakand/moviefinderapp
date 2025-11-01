// src/components/Header.jsx
import { Link } from 'react-router-dom'; // ایمپورت کردن
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <Link to="/" className="logo">MovieFinder 🎬</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
export default Header;
