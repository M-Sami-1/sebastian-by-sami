import React from 'react';
import { ItemCard } from './ItemCard';
import { EmptyState } from './EmptyState';

export function MenuList({
  items = [],
  activeCategory = 'All',
  activeMood = '',
  searchQuery = '',
  onResetFilters
}) {
  if (items.length === 0) {
    return (
      <EmptyState
        type="search"
        title="No canteen items match your search"
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
    <section className="menu-list-section" aria-label="Campus Menu Items">
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
    </section>
  );
}
