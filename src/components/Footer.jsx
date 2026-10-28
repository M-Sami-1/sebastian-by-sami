import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
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
            <div className="footer-logo">
              <span className="logo-main">SEBASTIAN</span>
              <span className="logo-sub">BY SAMI</span>
            </div>
            <p className="footer-mission">
              Loud flavor. Real mood. Fresh smashed patties, slow-cooked curries, and house spice blends made to order.
            </p>
          </div>

          {/* Menu Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">The Menu</h4>
            <ul className="footer-links-list">
              <li><Link to="/menu">Full Lineup</Link></li>
              <li><Link to="/menu?category=Fast Food">Smashed Burgers</Link></li>
              <li><Link to="/menu?category=Main Course">Dum Biryani & Karahi</Link></li>
              <li><Link to="/menu?category=Snacks">Crispy Tenders & Wings</Link></li>
              <li><Link to="/menu?category=Drinks">Karak Matka Chai</Link></li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><a href="#menu-lineup">Menu</a></li>
              <li><a href="#story">Story</a></li>
              <li><a href="#combos">Combos</a></li>
              <li><Link to="/menu?filter=favourites">Saved Favourites</Link></li>
              <li><Link to="/cart">View Cart</Link></li>
            </ul>
          </div>

          {/* Standards Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Kitchen Standards</h4>
            <ul className="footer-links-list">
              <li>100% Fresh Ingredients</li>
              <li>Never Frozen Beef or Chicken</li>
              <li>Signature House Sauces</li>
              <li>Cooked to Order at 230°C</li>
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
