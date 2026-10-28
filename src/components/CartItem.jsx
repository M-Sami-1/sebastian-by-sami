import React, { useState } from 'react';
import { Trash2, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuantityControl } from './QuantityControl';
import { formatCurrency } from '../utils/formatters';

export function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove
}) {
  const [imageError, setImageError] = useState(false);
  const lineSubtotal = item.price * item.quantity;

  return (
    <article className="cart-item-card">
      {/* Thumbnail */}
      <Link to={`/item/${item.id}`} className="cart-item-thumb-link">
        {!imageError ? (
          <img
            src={item.image}
            alt={item.name}
            className="cart-item-thumb"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="cart-item-thumb-fallback">
            <Flame size={20} />
          </div>
        )}
      </Link>

      {/* Details */}
      <div className="cart-item-info">
        <span className="cart-item-category">{item.category}</span>
        <h4 className="cart-item-name">
          <Link to={`/item/${item.id}`}>{item.name}</Link>
        </h4>
        <div className="cart-item-unit-price">
          Unit: {formatCurrency(item.price)}
        </div>
      </div>

      {/* Quantity Stepper */}
      <div className="cart-item-qty">
        <QuantityControl
          quantity={item.quantity}
          onIncrease={() => onIncrease(item.id)}
          onDecrease={() => onDecrease(item.id)}
          min={1}
          size="sm"
        />
      </div>

      {/* Subtotal & Remove */}
      <div className="cart-item-total-block">
        <span className="cart-item-subtotal">{formatCurrency(lineSubtotal)}</span>
        <button
          type="button"
          className="cart-item-remove-btn"
          onClick={() => onRemove(item.id)}
          aria-label={`Remove ${item.name} from cart`}
          title="Remove item"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </article>
  );
}
