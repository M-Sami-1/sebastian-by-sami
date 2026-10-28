import React from 'react';

const CATEGORIES = [
  'All',
  'Fast Food',
  'Main Course',
  'Breakfast',
  'Snacks',
  'Drinks',
  'Desserts'
];

export function CategoryFilter({ selectedCategory, onSelectCategory, counts = {} }) {
  return (
    <nav className="category-filter" aria-label="Menu categories">
      <div className="category-filter-list" role="tablist">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
          const count = counts[cat] ?? (cat === 'All' ? counts['Total'] : undefined);

          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`category-pill ${isSelected ? 'is-active' : ''}`}
              onClick={() => onSelectCategory(cat)}
            >
              <span className="category-name">{cat}</span>
              {typeof count === 'number' && (
                <span className="category-count" aria-label={`${count} items`}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
