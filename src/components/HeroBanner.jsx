import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Flame, ShieldCheck } from 'lucide-react';
import { CheckeredRibbon } from './CheckeredRibbon';

export function HeroBanner({ onExploreClick }) {
  return (
    <section className="hero-banner-section" aria-label="Hero Spotlight">
      <div className="hero-content-wrapper">
        <div className="hero-text-col">
          <div className="hero-status-pill">
            <span className="live-dot" aria-hidden="true"></span>
            <span>Kitchen Open · Quick Pick-Up</span>
          </div>

          <h1 className="hero-headline">
            BOLD FLAVOR.<br />
            <span className="hero-headline-accent">REAL MOOD.</span>
          </h1>

          <p className="hero-lead">
            Smashed beef patties on a 230°C flat top, house-marinated crunch chicken, peri-peri crinkle fries, and slow-simmered dum biryani. Prepared fresh to order.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-hero-primary"
              onClick={onExploreClick}
            >
              <span>Explore Menu</span>
              <ArrowRight size={18} />
            </button>
            <Link to="/cart" className="btn-hero-secondary">
              <span>View Cart</span>
            </Link>
          </div>

          <div className="hero-perks-row">
            <div className="perk-item">
              <Clock size={16} className="perk-icon" />
              <span>10-min counter ready</span>
            </div>
            <div className="perk-item">
              <Flame size={16} className="perk-icon" />
              <span>230°C sizzling griddle</span>
            </div>
            <div className="perk-item">
              <ShieldCheck size={16} className="perk-icon" />
              <span>100% fresh, never frozen</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Col with REAL high-res food photo */}
        <div className="hero-visual-col">
          <div className="hero-badge-price">
            <span className="badge-prefix">Only</span>
            <span className="badge-price">Rs. 450</span>
          </div>

          <div className="hero-image-wrapper">
            <img
              src="/assets/food/double-smash.webp"
              alt="Double Trouble Smash Burger - SEBASTIAN by SAMI"
              className="hero-featured-img"
            />
          </div>

          <div className="hero-stamp-badge">
            <div className="stamp-inner">
              <span className="stamp-text">SEBASTIAN</span>
              <span className="stamp-sub">BY SAMI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker Tape Ribbon without emojis */}
      <div className="ticker-ribbon-container" aria-hidden="true">
        <div className="ticker-ribbon-track">
          {[1, 2].map(trackIndex => (
            <div key={trackIndex} className="ticker-ribbon-content">
              <span>SMASH BURGERS</span>
              <span className="ticker-bullet">•</span>
              <span>CRUNCH CHICKEN</span>
              <span className="ticker-bullet">•</span>
              <span>LOUD FRIES</span>
              <span className="ticker-bullet">•</span>
              <span>SINDHI BIRYANI</span>
              <span className="ticker-bullet">•</span>
              <span>KARAK CHAI</span>
              <span className="ticker-bullet">•</span>
              <span>ONLINE ORDERING</span>
              <span className="ticker-bullet">•</span>
              <span>SEBASTIAN BY SAMI</span>
              <span className="ticker-bullet">•</span>
            </div>
          ))}
        </div>
      </div>

      <CheckeredRibbon height={16} />
    </section>
  );
}
