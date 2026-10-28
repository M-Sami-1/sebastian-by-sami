import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavourites } from '../context/FavouritesContext';

export function Header() {
  const { totalCount } = useCart();
  const { favouritesCount } = useFavourites();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Controlled navigation to ensure the target section is never hidden by sticky header
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    closeMobileMenu();

    if (location.pathname !== '/') {
      navigate('/' + (sectionId && sectionId !== 'top' ? `#${sectionId}` : ''));
      setTimeout(() => {
        if (!sectionId || sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    } else {
      if (!sectionId || sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  const handleAllItemsClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    navigate('/menu?category=All');
    setTimeout(() => {
      const el = document.getElementById('menu-lineup');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleFavouritesClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    navigate('/menu?filter=favourites#menu-lineup');
  };

  return (
    <header className="site-header">
      {/* Top Announcement Bar - Clean, No Emojis */}
      <aside className="top-announcement-bar" aria-label="Kitchen Notice">
        <div className="announcement-content">
          <span>BREWED FRESH. SERVED BOLD. MADE FOR GOOD TIMES.</span>
        </div>
      </aside>

      {/* Main Navigation Bar */}
      <div className="header-main-container">
        <div className="header-inner">
          {/* Brand Identity: SEBASTIAN by SAMI with real transparent logo */}
          <Link to="/" className="brand-link" onClick={(e) => handleSectionClick(e, 'top')}>
            <img
              src="/assets/branding/logo.png"
              alt="SEBASTIAN by SAMI"
              className="brand-logo-img"
            />
            <div className="brand-text-block">
              <span className="brand-name">SEBASTIAN</span>
              <span className="brand-subtitle">BY SAMI</span>
            </div>
          </Link>

          {/* Desktop Navigation Links: Exactly Home, Menu, Story, Combos */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a
              href="#top"
              onClick={(e) => handleSectionClick(e, 'top')}
              className="nav-link"
            >
              Home
            </a>
            <a
              href="#menu-lineup"
              onClick={(e) => handleSectionClick(e, 'menu-lineup')}
              className="nav-link"
            >
              Menu
            </a>
            <a
              href="#story"
              onClick={(e) => handleSectionClick(e, 'story')}
              className="nav-link"
            >
              Story
            </a>
            <a
              href="#combos"
              onClick={(e) => handleSectionClick(e, 'combos')}
              className="nav-link"
            >
              Combos
            </a>
          </nav>

          {/* Actions: Favourites + Cart Button */}
          <div className="header-actions">
            {/* Favourites Shortcut */}
            <Link
              to="/menu?filter=favourites#menu-lineup"
              className="action-icon-link"
              onClick={handleFavouritesClick}
              aria-label={`View saved favourites (${favouritesCount})`}
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
            <a
              href="#top"
              className="mobile-nav-link"
              onClick={(e) => handleSectionClick(e, 'top')}
            >
              Home
            </a>
            <a
              href="#menu-lineup"
              className="mobile-nav-link"
              onClick={(e) => handleSectionClick(e, 'menu-lineup')}
            >
              Menu
            </a>
            <a
              href="#story"
              className="mobile-nav-link"
              onClick={(e) => handleSectionClick(e, 'story')}
            >
              Story
            </a>
            <a
              href="#combos"
              className="mobile-nav-link"
              onClick={(e) => handleSectionClick(e, 'combos')}
            >
              Combos
            </a>
            <Link
              to="/menu?filter=favourites#menu-lineup"
              className="mobile-nav-link"
              onClick={handleFavouritesClick}
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
