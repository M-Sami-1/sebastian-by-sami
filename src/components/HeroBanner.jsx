import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Flame, ShieldCheck } from 'lucide-react';
import { CheckeredRibbon } from './CheckeredRibbon';

export function HeroBanner({ onExploreClick }) {
  return (
    <section className="hero-banner-section" id="top" aria-label="Hero Spotlight">

      {/* ── Two-column hero grid ─────────────────────────────────── */}
      <div className="hero-content-wrapper">

        {/* LEFT — Text & CTAs (7 of 12 cols on desktop) */}
        <div className="hero-text-col">
          <h1 className="hero-headline">
            BOLD FLAVOR.<br />
            <span className="hero-headline-accent">REAL MOOD.</span>
          </h1>

          {/* Primary CTAs — sit directly below headline */}
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

          <p className="hero-lead">
            Smashed beef patties on a 230°C flat top, house-marinated crunch
            chicken, peri-peri crinkle fries, and slow-simmered dum biryani.
            Prepared fresh to order.
          </p>

          {/* Feature perks strip */}
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

        {/* RIGHT — Burger visual (5 of 12 cols on desktop) */}
        <div className="hero-visual-col">
          <div className="hero-burger-frame">
            <img
              src="/assets/food/hero-burger.jpg"
              alt="Double Trouble Smash Burger on charred wood block — SEBASTIAN by SAMI"
              className="hero-burger-img"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

      </div>
      {/* ── End two-column grid ──────────────────────────────────── */}

      {/* Marquee ticker tape */}
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
