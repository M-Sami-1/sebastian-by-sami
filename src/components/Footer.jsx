import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const goToSection = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/' || location.pathname === '/menu') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    navigate(`/#${sectionId}`);
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  const goToCategory = (e, category) => {
    e.preventDefault();
    navigate(`/menu?category=${encodeURIComponent(category)}`);
    window.setTimeout(() => {
      document.getElementById('menu-lineup')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  return (
    <footer className="site-footer">
      {/* Drop Alert Newsletter section */}
      <section className="footer-drop-section" aria-label="Menu Updates & Drops">
        <div className="footer-drop-container">
          <div className="drop-text-col">
            <h3 className="drop-heading">GET DROPS BEFORE EVERYONE ELSE</h3>
            <p className="drop-subheading">
              Exclusive weekly updates on seasonal menu items, weekend specials, and house drops.
            </p>
          </div>

          <div className="drop-form-col">
            {subscribed ? (
              <div className="drop-success-box" role="status">
                <Check size={20} className="success-icon" />
                <span>You're subscribed! Watch your inbox for upcoming drops.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="drop-form">
                <label htmlFor="customer-email-input" className="sr-only">
                  Email Address
                </label>
                <input
                  id="customer-email-input"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="drop-input"
                />
                <button type="submit" className="drop-submit-btn">
                  <span>Sign Up</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Main Footer Links & Branding */}
      <div className="footer-main-container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo" aria-label="SEBASTIAN by SAMI home">
              <span className="logo-main">SEBASTIAN</span>
              <span className="logo-sub">BY SAMI</span>
            </Link>
            <p className="footer-mission">
              Loud flavor. Real mood. Fresh smashed patties, slow-cooked curries, and house spice blends made to order.
            </p>
          </div>

          {/* Menu Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">The Menu</h4>
            <ul className="footer-links-list">
              <li><Link to="/menu" onClick={(e) => goToCategory(e, 'All')}>Full Lineup</Link></li>
              <li><Link to="/menu?category=Fast%20Food" onClick={(e) => goToCategory(e, 'Fast Food')}>Smashed Burgers</Link></li>
              <li><Link to="/menu?category=Main%20Course" onClick={(e) => goToCategory(e, 'Main Course')}>Dum Biryani & Karahi</Link></li>
              <li><Link to="/menu?category=Snacks" onClick={(e) => goToCategory(e, 'Snacks')}>Crispy Tenders & Wings</Link></li>
              <li><Link to="/menu?category=Drinks" onClick={(e) => goToCategory(e, 'Drinks')}>Karak Matka Chai</Link></li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
              <li><a href="/#menu-lineup" onClick={(e) => goToSection(e, 'menu-lineup')}>Menu</a></li>
              <li><a href="/#story" onClick={(e) => goToSection(e, 'story')}>Story</a></li>
              <li><a href="/#combos" onClick={(e) => goToSection(e, 'combos')}>Combos</a></li>
              <li><Link to="/menu?filter=favourites">Saved Favourites</Link></li>
              <li><Link to="/cart">View Cart</Link></li>
            </ul>
          </div>

          {/* Standards Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Kitchen Standards</h4>
            <ul className="footer-links-list">
              <li><a href="/#why-sebastian" onClick={(e) => goToSection(e, 'why-sebastian')}>100% Fresh Ingredients</a></li>
              <li><a href="/#why-sebastian" onClick={(e) => goToSection(e, 'why-sebastian')}>Never Frozen Beef or Chicken</a></li>
              <li><a href="/#why-sebastian" onClick={(e) => goToSection(e, 'why-sebastian')}>Signature House Sauces</a></li>
              <li><a href="/#why-sebastian" onClick={(e) => goToSection(e, 'why-sebastian')}>Cooked to Order at 230°C</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Giant Brand Wordmark & Copyright - Fully Responsive, NEVER clips */}
        <div className="footer-bottom-bar">
          <div className="giant-footer-wordmark-container">
            <span className="giant-footer-wordmark">SEBASTIAN</span>
          </div>
          <div className="footer-legal-row">
            <p>© {new Date().getFullYear()} SEBASTIAN by SAMI. All rights reserved.</p>
            <p>Designed with passion & bold flavor.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
