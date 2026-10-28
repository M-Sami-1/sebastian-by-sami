import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, ShoppingBag, Check, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItem } from './CartItem';
import { EmptyState } from './EmptyState';
import { OrderReceipt } from './OrderReceipt';
import { OrderSuccessModal } from './OrderSuccessModal';
import { formatCurrency } from '../utils/formatters';

export function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalCount,
    subtotal,
    totalPrice
  } = useCart();

  const [selectedHub, setSelectedHub] = useState('Student Union Main Hall (Counter 1-3)');
  const [instructions, setInstructions] = useState('');
  const [completedOrder, setCompletedOrder] = useState(null);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const order = {
      orderId: 'SEB-' + Math.floor(1000 + Math.random() * 9000),
      totalItems: totalCount,
      totalPrice: totalPrice,
      pickupHub: selectedHub,
      createdAt: new Date().toISOString()
    };

    setCompletedOrder(order);
    clearCart();
  };

  if (cart.length === 0 && !completedOrder) {
    return (
      <div className="cart-empty-wrapper">
        <EmptyState
          type="cart"
          title="Your Canteen Tray is Empty"
          description="Looks like you haven't picked your cravings yet. Check out today's smashed burgers, hot dum biryani, and loud fries!"
          actionLabel="Explore Today's Menu"
          actionLink="/"
        />
      </div>
    );
  }

  return (
    <div className="cart-page-content">
      {/* Top Breadcrumb / Return */}
      <div className="cart-nav-bar">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          <span>Back to Menu</span>
        </Link>
        <div className="cart-page-title-row">
          <h1 className="cart-heading">YOUR CANTEEN TRAY</h1>
          <span className="cart-badge-count">{totalCount} {totalCount === 1 ? 'item' : 'items'}</span>
        </div>
      </div>

      <div className="cart-layout-grid">
        {/* Left Column: Items List */}
        <div className="cart-items-column">
          <div className="cart-list-card">
            <div className="cart-list-header">
              <span>Selected Dishes</span>
              <button
                type="button"
                className="cart-clear-btn"
                onClick={clearCart}
                aria-label="Clear entire cart"
              >
                <Trash2 size={14} />
                <span>Clear All</span>
              </button>
            </div>

            <div className="cart-items-container">
              {cart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            {/* Pickup Preferences */}
            <div className="cart-pickup-preferences">
              <label htmlFor="campus-pickup-hub" className="preference-label">
                Select Campus Pickup Counter:
              </label>
              <select
                id="campus-pickup-hub"
                className="hub-select-input"
                value={selectedHub}
                onChange={(e) => setSelectedHub(e.target.value)}
              >
                <option value="Student Union Main Hall (Counter 1-3)">
                  Student Union Main Hall (Counter 1-3)
                </option>
                <option value="North Quad Food Plaza (Central Terrace)">
                  North Quad Food Plaza (Central Terrace)
                </option>
                <option value="Science & Tech Complex (Block 4 Atrium)">
                  Science & Tech Complex (Block 4 Atrium)
                </option>
                <option value="Central Library Commons (Night Counter)">
                  Central Library Commons (Night Counter)
                </option>
              </select>

              <label htmlFor="order-special-instructions" className="preference-label" style={{ marginTop: '1rem' }}>
                Kitchen Notes (e.g. Extra spicy, no onions, extra napkins):
              </label>
              <input
                id="order-special-instructions"
                type="text"
                placeholder="Optional notes for the canteen crew..."
                className="instructions-input"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Retro Paper Receipt & Checkout */}
        <div className="cart-summary-column">
          <OrderReceipt
            cart={cart}
            subtotal={subtotal}
            totalPrice={totalPrice}
            pickupLocation={selectedHub}
          />

          <div className="cart-checkout-actions">
            <button
              type="button"
              className="btn-checkout"
              onClick={handleCheckout}
            >
              <span>Place Campus Order ({formatCurrency(totalPrice)})</span>
            </button>

            <div className="checkout-guarantee">
              <ShieldCheck size={16} className="guarantee-icon" />
              <span>Counter pickup ready in ~10 mins · Student card or cash at pickup</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {completedOrder && (
        <OrderSuccessModal
          orderDetails={completedOrder}
          onClose={() => setCompletedOrder(null)}
        />
      )}
    </div>
  );
}
