import React from 'react';
import { EmptyState } from '../components/EmptyState';

export function NotFoundPage() {
  return (
    <div className="page-wrapper not-found-page-wrapper">
      <div className="section-container" style={{ padding: '4rem 1rem' }}>
        <EmptyState
          type="default"
          title="404 - Page Not Found"
          description="The canteen route you are looking for does not exist or has moved. Return to the main menu to grab some food."
          actionLabel="Go to Today's Menu"
          actionLink="/"
        />
      </div>
    </div>
  );
}
