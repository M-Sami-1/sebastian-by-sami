import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, Flame, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavourites } from '../context/FavouritesContext';

export function Header() {
  const { totalCount } = useCart();
  const { favouritesCount } = useFavourites();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Top Campus Announcement Bar */}
      <aside className="top-announcement-bar" aria-label="Campus Notice">
        <div className="announcement-content">
          <span className="announcement-star">★</span>
          <span>CAMPUS SPECIAL: Fresh Double Smash & Hot Dum Biryani drops at 12:00 PM. Order online, pickup at Student Union!</span>
          <span className="announcement-star">★</span>
        </div>
      </aside>

      {/* Main Navigation Bar */}
      <div className="header-main-container">
        <div className="header-inner">
          {/* Brand Identity: SEBASTIAN by SAMI */}
          <Link to="/" className="brand-link" onClick={closeMobileMenu}>
            <div className="brand-crest">
              <Flame size={20} className="brand-flame-icon" />
            </div>
            <div className="brand-text-block">
              <span className="brand-name">SEBASTIAN</span>
              <span className="brand-subtitle">CAMPUS CANTEEN · BY SAMI</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
            >
              Today's Menu
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
            >
              All Items
            </NavLink>
            <a href="#campus-hubs" className="nav-link">
              Campus Hubs
            </a>
            <a href="#why-sebastian" className="nav-link">
              Our Kitchen
            </a>
          </nav>

          {/* Actions: Favourites + Cart Button */}
          <div className="header-actions">
            {/* Favourites Shortcut */}
            <Link
              to="/menu?filter=favourites"
              className="action-icon-link"
              aria-label={`View favourites (${favouritesCount} saved)`}
              title="Saved favourites"
            >
              <Heart size={20} strokeWidth={2.2} />
              {favouritesCount > 0 && (
                <span className="action-badge-dot" aria-hidden="true">
                  {favouritesCount}
                </span>
              )}
            </Link>

            {/* Cart Button with LIVE dynamic total quantity count */}
            <Link
              to="/cart"
              className={`header-cart-btn ${totalCount > 0 ? 'has-items' : ''}`}
              aria-label={`Cart with ${totalCount} items`}
            >
              <ShoppingBag size={18} strokeWidth={2.4} className="cart-btn-icon" />
              <span className="cart-btn-label">Cart</span>
              <span className="cart-count-pill" id="header-cart-count">
                {totalCount}
              </span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <nav className="mobile-nav-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'is-active' : ''}`}
              onClick={closeMobileMenu}
            >
              Today's Menu
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'is-active' : ''}`}
              onClick={closeMobileMenu}
            >
              Explore Full Lineup
            </NavLink>
            <Link
              to="/menu?filter=favourites"
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              Favourites ({favouritesCount})
            </Link>
            <Link
              to="/cart"
              className="mobile-nav-link mobile-cart-highlight"
              onClick={closeMobileMenu}
            >
              <span>View Cart</span>
              <span className="mobile-cart-badge">{totalCount} items</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
