import React from 'react';
import { ItemCard } from './ItemCard';
import { EmptyState } from './EmptyState';

export function MenuList({
  items = [],
  activeCategory = 'All',
  activeMood = '',
  searchQuery = '',
  onlyFavourites = false,
  favouritesCount = 0,
  onResetFilters
}) {
  if (items.length === 0) {
    if (onlyFavourites) {
      const hasSavedFavourites = favouritesCount > 0;

      return (
        <EmptyState
          type="favourite"
          title={hasSavedFavourites ? 'No saved dishes match these filters' : 'No favourites saved yet'}
          description={
            hasSavedFavourites
              ? 'Clear the current filters to see all of your saved dishes.'
              : 'Tap the heart on any dish to save it here for next time.'
          }
          actionLabel={hasSavedFavourites ? 'Clear filters' : 'Browse the full menu'}
          onActionClick={onResetFilters}
        />
      );
    }

    return (
      <EmptyState
        type="search"
        title="No items match your search"
        description={
          searchQuery
            ? `We couldn't find any dish matching "${searchQuery}" in ${activeCategory === 'All' ? 'any category' : activeCategory}.`
            : `No items available right now in category "${activeCategory}".`
        }
        actionLabel="Reset Filters & Show All"
        onActionClick={onResetFilters}
      />
    );
  }

  return (
    <div className="menu-list-section-inner" aria-label="Menu Items">
      <div className="menu-list-header">
        <span className="menu-list-count">
          Showing <strong>{items.length}</strong> {items.length === 1 ? 'item' : 'items'}
          {activeCategory !== 'All' && <span> in <em>{activeCategory}</em></span>}
          {activeMood && <span> for <em>"{activeMood}"</em> mood</span>}
        </span>
      </div>

      <div className="menu-grid">
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
