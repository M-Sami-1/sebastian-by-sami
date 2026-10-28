import React, { useState } from 'react';
import { Flame, Check, ArrowRight } from 'lucide-react';
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
      {/* Drop Alert Newsletter section from inspo */}
      <section className="footer-drop-section" aria-label="Drop Alerts">
        <div className="footer-drop-container">
          <div className="drop-text-col">
            <h3 className="drop-heading">GET DROPS BEFORE EVERYONE ELSE</h3>
            <p className="drop-subheading">
              One email on Fridays with new menu drops, secret student combos, and discount scratch codes.
            </p>
          </div>

          <div className="drop-form-col">
            {subscribed ? (
              <div className="drop-success-box" role="status">
                <Check size={20} className="success-icon" />
                <span>You're in the inner circle! Watch your inbox this Friday.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="drop-form">
                <label htmlFor="student-email-input" className="sr-only">
                  Student Email
                </label>
                <input
                  id="student-email-input"
                  type="email"
                  placeholder="student@university.edu"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="drop-input"
                />
                <button type="submit" className="drop-submit-btn">
                  <span>Sign me up</span>
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
              Loud flavor. Real mood. Crafted fresh daily on the 230°C hot griddle for students, faculty, and campus night owls.
            </p>
            <div className="footer-hours-pill">
              <span className="hours-dot"></span> Open Daily: 8:00 AM – 11:30 PM
            </div>
          </div>

          {/* Eat Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Eat</h4>
            <ul className="footer-links-list">
              <li><Link to="/menu">Today's Menu</Link></li>
              <li><Link to="/menu?category=Fast Food">Smashed Burgers</Link></li>
              <li><Link to="/menu?category=Main Course">Dum Biryani & Karahi</Link></li>
              <li><Link to="/menu?category=Snacks">Crispy Tenders & Wings</Link></li>
              <li><Link to="/menu?category=Drinks">Karak Matka Chai</Link></li>
            </ul>
          </div>

          {/* Campus Col */}
          <div className="footer-col" id="campus-hubs">
            <h4 className="footer-col-title">Campus Hubs</h4>
            <ul className="footer-links-list">
              <li>Student Union Main Hall (Counter 1-3)</li>
              <li>North Quad Food Court</li>
              <li>Science & Tech Complex Kiosk</li>
              <li>Central Library Late Night Corner</li>
            </ul>
          </div>

          {/* Info Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Canteen Care</h4>
            <ul className="footer-links-list">
              <li>100% Halal Certified</li>
              <li>No Frozen Patties Policy</li>
              <li>Student Meal Pass Accepted</li>
              <li>Allergen Advisory</li>
            </ul>
          </div>
        </div>

        {/* Bottom Giant Brand Wordmark & Copyright */}
        <div className="footer-bottom-bar">
          <div className="giant-footer-wordmark" aria-hidden="true">
            SEBASTIAN
          </div>
          <div className="footer-legal-row">
            <p>© {new Date().getFullYear()} SEBASTIAN Campus Canteen by SAMI. University Assignment Project.</p>
            <p>Designed with passion & bold flavor.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
