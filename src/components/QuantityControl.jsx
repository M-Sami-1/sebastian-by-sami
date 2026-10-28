import React from 'react';
import { Minus, Plus } from 'lucide-react';

export function QuantityControl({
  quantity = 1,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
  size = 'md',
  className = ''
}) {
  const handleDec = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onDecrease && quantity > min) {
      onDecrease();
    }
  };

  const handleInc = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onIncrease && quantity < max) {
      onIncrease();
    }
  };

  return (
    <div className={`quantity-control quantity-control-${size} ${className}`} role="group" aria-label="Quantity selector">
      <button
        type="button"
        className="qty-btn qty-btn-dec"
        onClick={handleDec}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <Minus size={16} strokeWidth={2.5} />
      </button>

      <span className="qty-number" aria-live="polite" aria-atomic="true">
        {quantity}
      </span>

      <button
        type="button"
        className="qty-btn qty-btn-inc"
        onClick={handleInc}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <Plus size={16} strokeWidth={2.5} />
      </button>
    </div>
  );
}
