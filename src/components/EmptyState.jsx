import React from 'react';
import { ShoppingBag, Search, Heart, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const ICON_MAP = {
  cart: ShoppingBag,
  search: Search,
  favourite: Heart,
  default: Utensils
};

export function EmptyState({
  type = 'default',
  title = 'No items found',
  description = 'Try adjusting your search terms or filters to find what you are craving.',
  actionLabel,
  actionLink,
  onActionClick
}) {
  const IconComponent = ICON_MAP[type] || ICON_MAP.default;

  return (
    <div className="empty-state-card" role="status">
      <div className="empty-state-icon-wrapper">
        <IconComponent size={44} className="empty-state-icon" aria-hidden="true" />
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-description">{description}</p>
      
      {actionLabel && (
        <div className="empty-state-action">
          {actionLink ? (
            <Link to={actionLink} className="btn-brand">
              {actionLabel}
            </Link>
          ) : (
            <button type="button" className="btn-brand" onClick={onActionClick}>
              {actionLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
