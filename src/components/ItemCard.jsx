import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Check, Flame, Star } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import { FavouriteButton } from './FavouriteButton';

export function ItemCard({ item }) {
  const { addToCart, getItemQuantity } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const currentQty = getItemQuantity(item.id);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className="item-card">
      <Link to={`/item/${item.id}`} className="item-card-clickable" aria-label={`View details for ${item.name}`}>
        {/* Card Media Header */}
        <div className="item-card-image-box">
          {item.badge && (
            <span className={`item-badge item-badge-${item.badge.toLowerCase().replace(/\s+/g, '-')}`}>
              {item.badge}
            </span>
          )}

          <div className="item-fav-wrapper">
            <FavouriteButton itemId={item.id} itemName={item.name} />
          </div>

          {!imageError ? (
            <img
              src={item.image}
              alt={item.name}
              className="item-card-img"
              loading="lazy"
              onError={handleImageError}
            />
          ) : (
            <div className="item-image-fallback" aria-label={item.name}>
              <Flame size={48} className="fallback-flame" />
              <span className="fallback-text">{item.category}</span>
            </div>
          )}

          {item.calories && (
            <span className="item-calories-tag">{item.calories}</span>
          )}
        </div>

        {/* Card Body */}
        <div className="item-card-body">
          <div className="item-card-meta">
            <span className="item-category-label">{item.category}</span>
            {item.rating && (
              <span className="item-rating-label">
                <Star size={12} fill="#FFB703" stroke="#FFB703" /> {item.rating.toFixed(1)}
              </span>
            )}
          </div>

          <h3 className="item-card-title">{item.name}</h3>

          <p className="item-card-description">
            {item.description}
          </p>

          {/* Card Footer: Price & Add Button */}
          <div className="item-card-footer">
            <div className="item-price-block">
              <span className="item-price-currency">Rs.</span>
              <span className="item-price-amount">{item.price}</span>
            </div>

            <button
              type="button"
              className={`item-add-btn ${justAdded ? 'is-added' : ''} ${currentQty > 0 ? 'in-cart' : ''}`}
              onClick={handleAdd}
              aria-label={currentQty > 0 ? `Add another ${item.name} to cart. Current quantity: ${currentQty}` : `Add ${item.name} to cart`}
              title="Add to cart"
            >
              {justAdded ? (
                <Check size={18} strokeWidth={3} className="add-btn-icon" />
              ) : (
                <Plus size={18} strokeWidth={2.8} className="add-btn-icon" />
              )}
              {currentQty > 0 && !justAdded && (
                <span className="item-in-cart-badge">{currentQty}</span>
              )}
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}
