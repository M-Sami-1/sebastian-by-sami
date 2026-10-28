import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export function ErrorState({ error, onRetry }) {
  return (
    <div className="error-state-box" role="alert">
      <div className="error-icon-wrapper">
        <AlertTriangle size={36} className="error-icon" />
      </div>
      <h3 className="error-title">Failed to load canteen menu</h3>
      <p className="error-message">
        {error || 'Unable to communicate with the canteen server to retrieve today\'s menu.'}
      </p>
      {onRetry && (
        <button type="button" className="btn-brand" onClick={onRetry}>
          <RefreshCw size={16} className="btn-icon" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
}
