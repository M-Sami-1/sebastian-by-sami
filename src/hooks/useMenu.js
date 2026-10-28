import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to dynamically fetch menu items from local /menu.json
 * Uses useEffect, fetch, and async/await with robust error handling.
 */
export function useMenu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMenu = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Dynamic fetch from public/menu.json
      const response = await fetch('/menu.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to load menu: HTTP ${response.status} (${response.statusText})`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('Invalid menu data format: expected an array of food items');
      }

      setMenu(data);
    } catch (err) {
      console.error('Error fetching menu.json:', err);
      setError(err.message || 'Could not load today\'s canteen menu. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  return {
    menu,
    loading,
    error,
    refetch: fetchMenu
  };
}
