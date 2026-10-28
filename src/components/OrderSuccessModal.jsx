import React, { useEffect, useRef } from 'react';
import { CheckCircle2, Clock, MapPin, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/formatters';

export function OrderSuccessModal({ orderDetails, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    // Prevent background scrolling while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!orderDetails) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-success-title"
      onClick={onClose}
    >
      <div
        className="modal-card"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accessible Close Button */}
        <button
          type="button"
          className="modal-close-icon-btn"
          onClick={onClose}
          aria-label="Close confirmation dialog"
        >
          <X size={20} />
        </button>

        <div className="modal-scrollable-content">
          <div className="modal-icon-badge">
            <CheckCircle2 size={44} className="modal-check-icon" />
          </div>

          <h3 id="order-success-title" className="modal-title">ORDER RECEIVED</h3>
          <p className="modal-subtitle">
            Your ticket is sizzling on the 230°C flat top.
          </p>

          <div className="modal-pickup-card">
            <div className="pickup-token">
              <span className="token-label">PICKUP TOKEN</span>
              <span className="token-code">{orderDetails.orderId}</span>
            </div>

            <div className="modal-meta-list">
              <div className="meta-item">
                <Clock size={16} />
                <span>Estimated ready time: <strong>10-12 minutes</strong></span>
              </div>
              <div className="meta-item">
                <MapPin size={16} />
                <span>Pick-up: <strong>{orderDetails.pickupHub}</strong></span>
              </div>
            </div>

            <div className="modal-order-summary">
              <div className="summary-row">
                <span>Items Ordered:</span>
                <strong>{orderDetails.totalItems} {orderDetails.totalItems === 1 ? 'item' : 'items'}</strong>
              </div>
              <div className="summary-row">
                <span>Total Amount:</span>
                <strong className="summary-total">{formatCurrency(orderDetails.totalPrice)}</strong>
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <Link to="/" className="btn-brand modal-btn" onClick={onClose}>
              <span>Return to Menu</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
