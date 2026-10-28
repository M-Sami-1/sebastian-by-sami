import React from 'react';
import { EmptyState } from '../components/EmptyState';

export function NotFoundPage() {
  return (
    <div className="page-wrapper not-found-page-wrapper">
      <div className="section-container" style={{ padding: '4rem 1rem' }}>
        <EmptyState
          type="default"
          title="404 - Page Not Found"
          description="The page you are looking for does not exist or has moved. Return to the main menu to explore our dishes."
          actionLabel="Go to Menu"
          actionLink="/"
        />
      </div>
    </div>
  );
}
