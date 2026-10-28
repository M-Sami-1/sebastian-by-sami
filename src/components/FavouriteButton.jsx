import React from 'react';
import { Heart } from 'lucide-react';
import { useFavourites } from '../context/FavouritesContext';

export function FavouriteButton({ itemId, itemName = 'item', size = 20, className = '' }) {
  const { isFavourite, toggleFavourite } = useFavourites();
  const active = isFavourite(itemId);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavourite(itemId);
  };

  return (
    <button
      type="button"
      className={`favourite-btn ${active ? 'is-favourite' : ''} ${className}`}
      onClick={handleClick}
      aria-label={active ? `Remove ${itemName} from favourites` : `Add ${itemName} to favourites`}
      aria-pressed={active}
      title={active ? 'Remove from favourites' : 'Add to favourites'}
    >
      <Heart
        size={size}
        fill={active ? '#E0221E' : 'none'}
        stroke={active ? '#E0221E' : 'currentColor'}
        strokeWidth={2.5}
      />
    </button>
  );
}
