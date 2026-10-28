import React, { useState } from 'react';
import { Flame, Check, Plus, Heart, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavourites } from '../context/FavouritesContext';
import { Link } from 'react-router-dom';

export function MoodShowcase({ featuredItem }) {
  const { addToCart, getItemQuantity } = useCart();
  const { isFavourite, toggleFavourite } = useFavourites();
  const [justAdded, setJustAdded] = useState(false);

  if (!featuredItem) return null;

  const currentQty = getItemQuantity(featuredItem.id);
  const isFav = isFavourite(featuredItem.id);

  const handleAdd = () => {
    addToCart(featuredItem, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const heatLevel = featuredItem.spiceLevel || 2;
  const napkinsNeeded = featuredItem.napkins || 3;

  return (
    <section className="mood-showcase-section" aria-label="Featured Pick">
      <div className="mood-showcase-card">
        {/* Visual Dish Column */}
        <div className="showcase-visual-col">
          <div className="showcase-price-tag">
            <span className="price-tag-prefix">Only</span>
            <span className="price-tag-value">Rs. {featuredItem.price}</span>
          </div>

          <Link to={`/item/${featuredItem.id}`} className="showcase-image-link">
            <img
              src={featuredItem.image}
              alt={featuredItem.name}
              className="showcase-food-img"
            />
          </Link>
        </div>

        {/* Dish Stats Card Column */}
        <div className="showcase-details-col">
          <div className="showcase-header-row">
            <span className="showcase-badge">{featuredItem.badge || 'House Favorite'}</span>
            <button
              type="button"
              className={`showcase-fav-btn ${isFav ? 'active' : ''}`}
              onClick={() => toggleFavourite(featuredItem.id)}
              aria-label={isFav ? 'Remove from favourites' : 'Save to favourites'}
            >
              <Heart size={20} fill={isFav ? '#E0221E' : 'none'} stroke={isFav ? '#E0221E' : '#FFF'} />
            </button>
          </div>

          <h3 className="showcase-title">
            <Link to={`/item/${featuredItem.id}`}>{featuredItem.name}</Link>
          </h3>

          <p className="showcase-description">{featuredItem.description}</p>

          {/* Professional Meters: Heat, Crunch, Napkins - NO EMOJIS */}
          <div className="showcase-meters-table">
            <div className="meter-row">
              <span className="meter-label">Heat Level</span>
              <div className="meter-flames" aria-label={`Heat level ${heatLevel} of 5`}>
                {[1, 2, 3, 4, 5].map(step => (
                  <Flame
                    key={step}
                    size={18}
                    className={`meter-flame-icon ${heatLevel >= step ? 'flame-active' : 'flame-inactive'}`}
                  />
                ))}
              </div>
            </div>

            <div className="meter-row">
              <span className="meter-label">Crunch</span>
              <div className="meter-bars" aria-label="Crunch rating 4 of 5">
                {[1, 2, 3, 4, 5].map(step => (
                  <span
                    key={step}
                    className={`meter-bar ${step <= 4 ? 'bar-active' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="meter-row">
              <span className="meter-label">Napkins Needed</span>
              <div className="meter-napkin-tags" aria-label={`${napkinsNeeded} napkins recommended`}>
                <span className="napkin-count-badge">{napkinsNeeded} Napkins</span>
              </div>
            </div>
          </div>

          {/* Action Row: Calories & Add to bag */}
          <div className="showcase-action-row">
            <span className="showcase-calories-badge">{featuredItem.calories || '870 kcal'}</span>

            <button
              type="button"
              className={`btn-showcase-add ${justAdded ? 'is-success' : ''}`}
              onClick={handleAdd}
            >
              {justAdded ? (
                <>
                  <Check size={18} strokeWidth={3} />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <Plus size={18} strokeWidth={2.8} />
                  <span>Add to Order {currentQty > 0 ? `(${currentQty})` : ''}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
