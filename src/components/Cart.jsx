import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, ShieldCheck, User } from 'lucide-react';
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

  const [selectedHub, setSelectedHub] = useState('Main Kitchen Counter (Downtown Central)');
  const [instructions, setInstructions] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    if (!customerName.trim()) {
      setNameError(true);
      document.getElementById('customer-name-input')?.focus();
      return;
    }

    setNameError(false);

    const order = {
      orderId: 'SEB-' + Math.floor(1000 + Math.random() * 9000),
      customerName: customerName.trim(),
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
          title="Your Cart is Empty"
          description="You haven't added anything to your order yet. Check out today's freshly smashed burgers, crispy wings, and slow-cooked biryani!"
          actionLabel="Explore Menu"
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
          <h1 className="cart-heading">YOUR ORDER</h1>
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
                aria-label="Clear entire order"
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

            {/* Order Preferences */}
            <div className="cart-pickup-preferences">

              {/* Customer Name — required */}
              <label htmlFor="customer-name-input" className="preference-label">
                Your Name (required for receipt):
              </label>
              <div className="name-input-wrapper">
                <User size={16} className="name-input-icon" />
                <input
                  id="customer-name-input"
                  type="text"
                  placeholder="Enter your name..."
                  className={`name-input ${nameError ? 'input-error' : ''}`}
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (e.target.value.trim()) setNameError(false);
                  }}
                  maxLength={48}
                  autoComplete="name"
                />
              </div>
              {nameError && (
                <p className="input-error-msg">Please enter your name before placing the order.</p>
              )}

              <label htmlFor="order-pickup-location" className="preference-label" style={{ marginTop: '1rem' }}>
                Select Pick-Up Location:
              </label>
              <select
                id="order-pickup-location"
                className="hub-select-input"
                value={selectedHub}
                onChange={(e) => setSelectedHub(e.target.value)}
              >
                <option value="Main Kitchen Counter (Downtown Central)">
                  Main Kitchen Counter (Downtown Central)
                </option>
                <option value="Express Pick-Up Window (North Station)">
                  Express Pick-Up Window (North Station)
                </option>
                <option value="Curbside Station (East Wing)">
                  Curbside Station (East Wing)
                </option>
              </select>

              <label htmlFor="order-special-instructions" className="preference-label" style={{ marginTop: '1rem' }}>
                Kitchen Notes:
              </label>
              <input
                id="order-special-instructions"
                type="text"
                placeholder="Special instructions (e.g. extra crispy fries, no onions)..."
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
            customerName={customerName}
          />

          <div className="cart-checkout-actions">
            <button
              type="button"
              className="btn-checkout"
              onClick={handleCheckout}
            >
              <span>Place Order ({formatCurrency(totalPrice)})</span>
            </button>

            <div className="checkout-guarantee">
              <ShieldCheck size={16} className="guarantee-icon" />
              <span>Hot &amp; ready for pickup in ~10-12 mins · Card or cash at counter</span>
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
