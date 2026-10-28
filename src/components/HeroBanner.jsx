import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock, Flame } from 'lucide-react';
import { CheckeredRibbon } from './CheckeredRibbon';

export function HeroBanner({ onExploreClick }) {
  return (
    <section className="hero-banner-section" aria-label="Hero Spotlight">
      <div className="hero-content-wrapper">
        <div className="hero-text-col">
          <div className="hero-status-pill">
            <span className="live-dot" aria-hidden="true"></span>
            <span>Open till 11:30 PM across 4 campus hubs</span>
          </div>

          <h1 className="hero-headline">
            BOLD FLAVOR.<br />
            <span className="hero-headline-accent">REAL MOOD.</span>
          </h1>

          <p className="hero-lead">
            No tired cafeteria food. Fresh smashed beef patties, 24-hour spiced biryani, crunchy buttermilk tenders, and hot karak chai made to power your study sessions.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-hero-primary"
              onClick={onExploreClick}
            >
              <span>Order Now</span>
              <ArrowRight size={18} />
            </button>
            <Link to="/cart" className="btn-hero-secondary">
              <span>View Cart</span>
            </Link>
          </div>

          <div className="hero-perks-row">
            <div className="perk-item">
              <Clock size={16} className="perk-icon" />
              <span>10-min counter pickup</span>
            </div>
            <div className="perk-item">
              <Flame size={16} className="perk-icon" />
              <span>Smashed at 230°C</span>
            </div>
            <div className="perk-item">
              <Sparkles size={16} className="perk-icon" />
              <span>Student budget friendly</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Col */}
        <div className="hero-visual-col">
          <div className="hero-badge-price">
            <span className="badge-prefix">Only</span>
            <span className="badge-price">Rs. 450</span>
          </div>

          <div className="hero-image-wrapper">
            <img
              src="/assets/food/smash-burger.svg"
              alt="Double Trouble Smash Burger - Sebastian Special"
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

      {/* Marquee Ticker Tape Ribbon */}
      <div className="ticker-ribbon-container" aria-hidden="true">
        <div className="ticker-ribbon-track">
          {[1, 2].map(trackIndex => (
            <div key={trackIndex} className="ticker-ribbon-content">
              <span>SMASH BURGERS</span>
              <span className="ticker-bullet">✦</span>
              <span>CRUNCH CHICKEN</span>
              <span className="ticker-bullet">✦</span>
              <span>LOUD FRIES</span>
              <span className="ticker-bullet">✦</span>
              <span>SINDHI BIRYANI</span>
              <span className="ticker-bullet">✦</span>
              <span>KARAK CHAI</span>
              <span className="ticker-bullet">✦</span>
              <span>DELIVERY OR PICKUP</span>
              <span className="ticker-bullet">✦</span>
              <span>BY SAMI</span>
              <span className="ticker-bullet">✦</span>
            </div>
          ))}
        </div>
      </div>

      <CheckeredRibbon height={16} />
    </section>
  );
}
