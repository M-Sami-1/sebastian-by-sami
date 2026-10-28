import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CheckeredRibbon } from './CheckeredRibbon';

export function HeroBanner({ onExploreClick }) {
  return (
    <section className="hero-banner-section hero-reference-layout" id="top" aria-label="Hero Spotlight">
      <div className="hero-reference-inner">
        <img className="hero-reference-background" src="/assets/food/hero-background.jpeg" alt="" aria-hidden="true" />
        <div className="hero-reference-copy">
          <h1 className="hero-reference-title">
            <span>GOOD</span>
            <span>FOOD.</span>
            <span className="hero-reference-red">BAD</span>
            <span>INFLUENCE.</span>
          </h1>
          <p className="hero-reference-description">One bite and your plans are cancelled. Big smash burgers, loud crunch, zero chill.</p>
          <div className="hero-reference-actions">
            <button type="button" className="hero-reference-primary" onClick={onExploreClick}>GET INTO IT <ArrowRight size={17} /></button>
            <Link to="/cart" className="hero-reference-secondary">YOUR BAG</Link>
          </div>
        </div>
      </div>
      <div className="hero-reference-ticker" aria-hidden="true">
        <div className="hero-marquee-track">
          {[1, 2].map((copy) => (
            <div className="hero-marquee-content" key={copy}>
              <span>SMASH BURGERS</span><b>✳</b><span>CRUNCH CHICKEN</span><b>✳</b>
              <span>LOUD FRIES</span><b>✳</b><span>KARACHI KITCHEN</span><b>✳</b>
              <span>GOOD FOOD. BAD INFLUENCE.</span><b>✳</b>
            </div>
          ))}
        </div>
      </div>
      <CheckeredRibbon height={12} />
    </section>
  );
}
