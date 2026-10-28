import React, { useState } from 'react';
import { ShoppingBag, Check, Zap, Sparkles, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

const COMBOS_DATA = [
  {
    id: 101,
    name: "Double Trouble Smash Box",
    badge: "BESTSELLER COMBO",
    badgeColor: "gold",
    image: "/assets/food/double-smash.webp",
    description: "Our signature double beef smash burger with crispy peri-peri fries and piping hot karak cardamom matka chai.",
    itemsIncluded: [
      "Double Trouble Smash Burger",
      "Peri-Peri Skinny Fries",
      "Karak Cardamom Matka Chai"
    ],
    originalPrice: 710,
    comboPrice: 590,
    savings: 120,
    primaryItem: {
      id: 1,
      name: "Double Trouble Smash Burger",
      price: 450,
      category: "Fast Food",
      image: "/assets/food/double-smash.webp",
      description: "Two 100% fresh beef patties smashed thin on a 230°C flat top."
    },
    sideItems: [
      { id: 4, name: "Peri-Peri Skinny Fries", price: 190, category: "Fast Food", image: "/assets/food/fries.webp" },
      { id: 13, name: "Karak Cardamom Matka Chai", price: 70, category: "Drinks", image: "/assets/food/chai.webp" }
    ]
  },
  {
    id: 102,
    name: "Sindhi Biryani Royal Duo",
    badge: "CHEF SPECIAL",
    badgeColor: "red",
    image: "/assets/food/biryani.webp",
    description: "Slow-simmered basmati rice layered with tender spiced chicken, accompanied by crispy samosa chaat and hot tea.",
    itemsIncluded: [
      "Sindhi Dum Biryani Special",
      "Crispy Punjabi Samosa Chaat",
      "Karak Cardamom Matka Chai"
    ],
    originalPrice: 600,
    comboPrice: 499,
    savings: 101,
    primaryItem: {
      id: 5,
      name: "Sindhi Dum Biryani Special",
      price: 370,
      category: "Main Course",
      image: "/assets/food/biryani.webp",
      description: "Fragrant long-grain aged basmati rice slow-cooked with bone-in spiced chicken."
    },
    sideItems: [
      { id: 11, name: "Crispy Punjabi Samosa Chaat", price: 160, category: "Snacks", image: "/assets/food/samosa.webp" },
      { id: 13, name: "Karak Cardamom Matka Chai", price: 70, category: "Drinks", image: "/assets/food/chai.webp" }
    ]
  },
  {
    id: 103,
    name: "Wings & Loaded Crunch Pack",
    badge: "SAVER VALUE",
    badgeColor: "dark",
    image: "/assets/food/chicken-wings.webp",
    description: "6 pieces of crisp buffalo chicken wings tossed in fiery red hot glaze, paired with cheesy loaded nacho chips.",
    itemsIncluded: [
      "Spicy Buffalo Wings (6 pcs)",
      "Cheesy Loaded Nacho Box",
      "Iced Cold Brew"
    ],
    originalPrice: 770,
    comboPrice: 640,
    savings: 130,
    primaryItem: {
      id: 3,
      name: "Spicy Buffalo Wings (6 pcs)",
      price: 390,
      category: "Fast Food",
      image: "/assets/food/chicken-wings.webp",
      description: "Crisp bone-in chicken wings tossed in fiery red hot glaze."
    },
    sideItems: [
      { id: 12, name: "Cheesy Loaded Nacho Box", price: 260, category: "Snacks", image: "/assets/food/nachos.jpeg" },
      { id: 14, name: "Iced Vanilla Cold Brew", price: 120, category: "Drinks", image: "/assets/food/coffee.webp" }
    ]
  }
];

export function CombosSection() {
  const { addToCart } = useCart();
  const [addedComboId, setAddedComboId] = useState(null);

  const handleAddCombo = (combo) => {
    // Add primary item and side items together
    addToCart(combo.primaryItem, 1);
    combo.sideItems.forEach(side => {
      addToCart(side, 1);
    });

    setAddedComboId(combo.id);
    setTimeout(() => {
      setAddedComboId(null);
    }, 2000);
  };

  return (
    <section className="combos-section" id="combos" aria-label="Deals and Special Combos">
      <div className="section-container">
        <div className="combos-header">
          <div className="combos-eyebrow-tag">
            <Zap size={14} />
            <span>KITCHEN VALUE DEALS</span>
          </div>
          <h2 className="combos-title">DEALS & COMBOS</h2>
          <p className="combos-subtitle">
            Handpicked kitchen pairings crafted for complete flavor and maximum savings.
          </p>
        </div>

        <div className="combos-grid">
          {COMBOS_DATA.map(combo => {
            const isAdded = addedComboId === combo.id;

            return (
              <div key={combo.id} className="combo-card">
                <div className="combo-image-holder">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="combo-card-img"
                    loading="lazy"
                  />
                  <div className={`combo-badge badge-${combo.badgeColor}`}>
                    <Sparkles size={12} />
                    <span>{combo.badge}</span>
                  </div>
                  <div className="combo-savings-pill">
                    SAVE Rs. {combo.savings}
                  </div>
                </div>

                <div className="combo-content">
                  <h3 className="combo-name">{combo.name}</h3>
                  <p className="combo-desc">{combo.description}</p>

                  <div className="combo-items-list">
                    <span className="combo-includes-label">Includes:</span>
                    <ul>
                      {combo.itemsIncluded.map((item, idx) => (
                        <li key={idx}>
                          <Flame size={12} className="bullet-flame" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="combo-pricing-bar">
                    <div className="combo-prices">
                      <span className="combo-original-price">Rs. {combo.originalPrice}</span>
                      <span className="combo-deal-price">Rs. {combo.comboPrice}</span>
                    </div>

                    <button
                      type="button"
                      className={`btn-combo-add ${isAdded ? 'is-added' : ''}`}
                      onClick={() => handleAddCombo(combo)}
                      aria-label={`Add ${combo.name} to cart`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={16} />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={16} />
                          <span>Add Combo</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
