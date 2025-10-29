import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ searchTerm, onSearchChange }) {
  // State برای نگهداری متن جستجو

  const handleInputChange = (event) => {
    // آپدیت کردن State با مقدار ورودی کاربر
    onSearchChange(event.target.value);
  };


  // Event handler جدید برای پاک کردن
  const handleClearClick = () => {
    onSearchChange('');
  };


  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm} // مقدار input به State متصل است
        onChange={handleInputChange} // با هر تغییر، تابع handler فراخوانی می‌شود
      />

      {searchTerm && (
        <button onClick={handleClearClick} className="clear-btn">
          &times; 
        </button>
      )}

    </div>
  );
}
export default SearchBar