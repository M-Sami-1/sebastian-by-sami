import React from 'react';
import { formatCurrency } from '../utils/formatters';

export function OrderReceipt({ cart = [], subtotal = 0, totalPrice = 0, pickupLocation = 'Student Union Hall' }) {
  const orderNumber = 'SEB-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="retro-receipt-container" aria-label="Order summary receipt">
      <div className="receipt-paper">
        {/* Receipt Header */}
        <div className="receipt-header">
          <div className="receipt-brand">SEBASTIAN</div>
          <div className="receipt-subbrand">CAMPUS CANTEEN · BY SAMI</div>
          <div className="receipt-meta-row">
            <span>Order #{orderNumber}</span>
            <span>{timeString}</span>
          </div>
          <div className="receipt-pickup-hub">
            Pickup: <strong>{pickupLocation}</strong>
          </div>
        </div>

        <div className="receipt-divider-dash"></div>

        {/* Receipt Items Breakdown */}
        <div className="receipt-items-list">
          {cart.map(item => (
            <div key={item.id} className="receipt-line-item">
              <span className="line-item-qty">{item.quantity}×</span>
              <span className="line-item-name">{item.name}</span>
              <span className="line-item-price">{formatCurrency(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>

        <div className="receipt-divider-dash"></div>

        {/* Pricing Subtotals */}
        <div className="receipt-totals-table">
          <div className="receipt-row">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="receipt-row">
            <span>Campus Pickup Service</span>
            <span className="free-tag">FREE (Subsidized)</span>
          </div>
          <div className="receipt-row">
            <span>Student Discount</span>
            <span className="discount-tag">Rs. 0 (Standard Student Rate)</span>
          </div>
          <div className="receipt-row total-row">
            <span>TOTAL</span>
            <span className="total-val">{formatCurrency(totalPrice)}</span>
          </div>
        </div>

        <div className="receipt-divider-dash"></div>

        {/* Barcode & Slogan */}
        <div className="receipt-footer">
          <div className="receipt-barcode" aria-hidden="true">
            ||| | |||| | ||||| || |||||| | ||| || |||| |||
          </div>
          <p className="receipt-slogan">
            KEEP GOING... HOT & FRESH IN 10 MINS
          </p>
        </div>
      </div>
    </div>
  );
}
