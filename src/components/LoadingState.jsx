import React from 'react';
import { Flame } from 'lucide-react';

export function LoadingState({ message = "Flipping smashed patties on the 230°C hot griddle... Loading today's menu" }) {
  return (
    <div className="loading-state-wrapper" role="status" aria-live="polite">
      <div className="loading-spinner-box">
        <div className="spinner-ring"></div>
        <Flame className="spinner-flame-icon" size={28} />
      </div>
      <h3 className="loading-title">SEBASTIAN KITCHEN</h3>
      <p className="loading-message">{message}</p>
      
      {/* Skeleton cards grid to prevent layout shifts */}
      <div className="skeleton-grid" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-thumb"></div>
            <div className="skeleton-line title"></div>
            <div className="skeleton-line desc"></div>
            <div className="skeleton-footer">
              <div className="skeleton-price"></div>
              <div className="skeleton-btn"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
