import React from 'react';
import { ItemDetails } from '../components/ItemDetails';
import { LoadingState } from '../components/LoadingState';
import { ErrorState } from '../components/ErrorState';

export function ItemDetailsPage({ menu = [], loading = false, error = null, onRetry }) {
  if (loading) {
    return <LoadingState message="Fetching dish details and allergen advisory..." />;
  }

  if (error) {
    return <ErrorState error={error} onRetry={onRetry} />;
  }

  return (
    <div className="page-wrapper item-details-page-wrapper">
      <div className="section-container">
        <ItemDetails menu={menu} loading={loading} />
      </div>
    </div>
  );
}
