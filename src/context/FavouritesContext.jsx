import React, { createContext, useContext, useState, useEffect } from 'react';

const FavouritesContext = createContext(null);

const FAVOURITES_STORAGE_KEY = 'sebastian_by_sami_favourites_v1';

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    try {
      const saved = localStorage.getItem(FAVOURITES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Failed to read favourites from localStorage', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVOURITES_STORAGE_KEY, JSON.stringify(favourites));
    } catch (e) {
      console.warn('Failed to save favourites to localStorage', e);
    }
  }, [favourites]);

  const toggleFavourite = (id) => {
    const numId = Number(id);
    setFavourites(prev => {
      if (prev.includes(numId)) {
        return prev.filter(favId => favId !== numId);
      } else {
        return [...prev, numId];
      }
    });
  };

  const isFavourite = (id) => {
    return favourites.includes(Number(id));
  };

  const clearFavourites = () => {
    setFavourites([]);
  };

  const value = {
    favourites,
    toggleFavourite,
    isFavourite,
    clearFavourites,
    favouritesCount: favourites.length
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
}
