import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Clock, Flame, ShieldAlert, Star, ShoppingBag, Layers } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { QuantityControl } from './QuantityControl';
import { FavouriteButton } from './FavouriteButton';
import { EmptyState } from './EmptyState';
import { formatCurrency } from '../utils/formatters';

export function ItemDetails({ menu = [], loading = false }) {
  const { id } = useParams();
  const { addToCart, getItemQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Find item by ID (handling number or string ID)
  const item = menu.find(m => String(m.id) === String(id));

  if (!item && !loading) {
    return (
      <div className="item-not-found-container">
        <EmptyState
          type="default"
          title="Dish Not Found"
          description={`We couldn't find a menu item with ID #${id}. It may currently be unavailable or the link is invalid.`}
          actionLabel="Return to Menu"
          actionLink="/menu#menu-lineup"
        />
      </div>
    );
  }

  if (loading || !item) {
    return (
      <div className="item-details-loading">
        <div className="spinner-ring"></div>
        <p>Loading dish details...</p>
      </div>
    );
  }

  const inCartQty = getItemQuantity(item.id);
  const liveSubtotal = item.price * quantity;

  const handleAddToCart = () => {
    addToCart(item, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const spiceLevel = item.spiceLevel || 0;
  const napkins = item.napkins || 2;

  return (
    <div className="item-details-page-content">
      {/* Return to menu link */}
      <nav className="item-details-nav" aria-label="Breadcrumb">
        <Link to="/menu#menu-lineup" className="back-link">
          <ArrowLeft size={18} />
          <span>Back to Menu</span>
        </Link>
        <span className="details-crumb-separator">/</span>
        <span className="details-crumb-active">{item.name}</span>
      </nav>

      {/* Item Main Layout */}
      <article className="item-details-card">
        {/* Visual Media Column */}
        <div className="item-details-media-col">
          <div className="details-image-frame">
            {item.badge && (
              <span className={`item-badge item-badge-${item.badge.toLowerCase().replace(/\s+/g, '-')}`}>
                {item.badge}
              </span>
            )}

            <div className="details-fav-button-holder">
              <FavouriteButton itemId={item.id} itemName={item.name} size={24} />
            </div>

            {!imageError ? (
              <img
                src={item.image}
                alt={item.name}
                className="details-food-img"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="details-image-fallback">
                <Flame size={72} className="fallback-flame" />
                <span>{item.category}</span>
              </div>
            )}
          </div>
        </div>

        {/* Info & Order Actions Column */}
        <div className="item-details-info-col">
          <div className="details-category-row">
            <span className="item-category-label">{item.category}</span>
            {item.mood && (
              <span className="details-mood-tag">Mood: {item.mood}</span>
            )}
            {item.rating && (
              <span className="item-rating-label">
                <Star size={14} fill="#FFB703" stroke="#FFB703" /> {item.rating.toFixed(1)} / 5.0
              </span>
            )}
          </div>

          <h1 className="details-title">{item.name}</h1>

          <div className="details-price-badge">
            <span className="price-label">Price:</span>
            <span className="price-amount">{formatCurrency(item.price)}</span>
          </div>

          <p className="details-description">{item.description}</p>

          {/* Quick specs grid - NO EMOJIS */}
          <div className="details-specs-grid">
            <div className="spec-card">
              <span className="spec-label">Preparation Time</span>
              <div className="spec-value-row">
                <Clock size={16} className="spec-icon" />
                <span className="spec-value">{item.prepTime || '10 mins'}</span>
              </div>
            </div>

            <div className="spec-card">
              <span className="spec-label">Energy</span>
              <div className="spec-value-row">
                <Flame size={16} className="spec-icon" />
                <span className="spec-value">{item.calories || 'Standard Serving'}</span>
              </div>
            </div>

            <div className="spec-card">
              <span className="spec-label">Heat & Spice</span>
              <div className="spec-value-row spec-flame-meter" aria-label={`Spice level ${spiceLevel} of 4`}>
                {[1, 2, 3, 4].map(step => (
                  <Flame
                    key={step}
                    size={16}
                    className={`spice-flame-icon ${spiceLevel >= step ? 'flame-active' : 'flame-inactive'}`}
                  />
                ))}
              </div>
            </div>

            <div className="spec-card">
              <span className="spec-label">Napkins Needed</span>
              <div className="spec-value-row">
                <Layers size={16} className="spec-icon" />
                <span className="spec-value">{napkins} Napkins Recommended</span>
              </div>
            </div>
          </div>

          {/* Allergens Notice */}
          {item.allergens && item.allergens.length > 0 && (
            <div className="allergens-box">
              <ShieldAlert size={16} className="allergen-icon" />
              <span>
                <strong>Allergen Notice:</strong> Contains {item.allergens.join(', ')}.
              </span>
            </div>
          )}

          {/* Order Actions Box */}
          <div className="details-actions-panel">
            <div className="quantity-selection-row">
              <span className="action-row-label">Quantity:</span>
              <QuantityControl
                quantity={quantity}
                onIncrease={() => setQuantity(q => q + 1)}
                onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                min={1}
                size="md"
              />
              <span className="subtotal-indicator">
                Subtotal: <strong>{formatCurrency(liveSubtotal)}</strong>
              </span>
            </div>

            <div className="buttons-row">
              <button
                type="button"
                className={`btn-add-details ${justAdded ? 'is-success' : ''}`}
                onClick={handleAddToCart}
              >
                {justAdded ? (
                  <>
                    <Check size={20} strokeWidth={3} />
                    <span>Added {quantity} to Order!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={20} />
                    <span>Add {quantity} to Order · {formatCurrency(liveSubtotal)}</span>
                  </>
                )}
              </button>

              <Link to="/cart" className="btn-view-cart-link">
                View Cart {inCartQty > 0 ? `(${inCartQty})` : ''}
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Recommended Items Section */}
      <section className="related-items-section" aria-label="You might also like">
        <h3 className="related-title">MORE SIGNATURE CRAVINGS</h3>
        <div className="related-grid">
          {menu
            .filter(m => m.id !== item.id && (m.category === item.category || m.mood === item.mood))
            .slice(0, 3)
            .map(rel => (
              <Link key={rel.id} to={`/item/${rel.id}`} className="related-card">
                <img src={rel.image} alt={rel.name} className="related-img" />
                <div className="related-info">
                  <span className="related-cat">{rel.category}</span>
                  <span className="related-name">{rel.name}</span>
                  <span className="related-price">{formatCurrency(rel.price)}</span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
