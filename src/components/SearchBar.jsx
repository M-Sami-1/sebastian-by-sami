import React from 'react';
import { Search, X } from 'lucide-react';

export function SearchBar({ value, onChange, onClear, placeholder = 'Search menu by name or dish...' }) {
  const handleClear = () => {
    if (onClear) {
      onClear();
    } else if (onChange) {
      onChange({ target: { value: '' } });
    }
  };

  return (
    <div className="search-bar-container">
      <label htmlFor="menu-search-input" className="sr-only">
        Search menu
      </label>
      <div className="search-bar-inner">
        <Search className="search-icon" size={20} aria-hidden="true" />
        <input
          id="menu-search-input"
          type="search"
          className="search-input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
        />
        {value && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
