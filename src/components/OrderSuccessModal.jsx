import React from 'react';
import { CheckCircle2, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/formatters';

export function OrderSuccessModal({ orderDetails, onClose }) {
  if (!orderDetails) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="order-success-title">
      <div className="modal-card">
        <div className="modal-icon-badge">
          <CheckCircle2 size={48} className="modal-check-icon" />
        </div>

        <h3 id="order-success-title" className="modal-title">ORDER RECEIVED!</h3>
        <p className="modal-subtitle">
          Your order has been sent straight to the chef's sizzling griddle.
        </p>

        <div className="modal-pickup-card">
          <div className="pickup-token">
            <span className="token-label">PICKUP TOKEN</span>
            <span className="token-code">{orderDetails.orderId}</span>
          </div>

          <div className="modal-meta-list">
            <div className="meta-item">
              <Clock size={16} />
              <span>Ready in approximately <strong>10-12 minutes</strong></span>
            </div>
            <div className="meta-item">
              <MapPin size={16} />
              <span>Location: <strong>{orderDetails.pickupHub}</strong></span>
            </div>
          </div>

          <div className="modal-order-summary">
            <div className="summary-row">
              <span>Items Ordered:</span>
              <strong>{orderDetails.totalItems} items</strong>
            </div>
            <div className="summary-row">
              <span>Total Paid:</span>
              <strong className="summary-total">{formatCurrency(orderDetails.totalPrice)}</strong>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <Link to="/" className="btn-brand modal-btn" onClick={onClose}>
            <span>Back to Today's Menu</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
