import React from 'react';
import { Flame, UtensilsCrossed, ShieldCheck } from 'lucide-react';
import { CheckeredRibbon } from './CheckeredRibbon';

export function AboutSection() {
  return (
    <section className="about-brand-section" id="story" aria-label="Story of SEBASTIAN by SAMI">
      <CheckeredRibbon height={16} />

      <div className="section-container about-container">
        <div className="about-grid">
          {/* Visual Column: Brand Transparent Logo */}
          <div className="about-visual-col">
            <div className="about-logo-frame">
              <img
                src="/assets/branding/logo.png"
                alt="SEBASTIAN by SAMI"
                className="about-brand-logo-img"
              />
              <div className="about-badge-tag">
                <span className="badge-tag-text">INDEPENDENT KITCHEN</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="about-text-col">
            <span className="about-eyebrow">OUR PHILOSOPHY</span>
            <h2 className="about-title">SEBASTIAN by SAMI</h2>

            <p className="about-lead">
              Founded on a simple premise: food should be bold, fresh, and uncompromising. We don't believe in holding warmers, pre-cooked patties, or generic recipes.
            </p>

            <p className="about-body">
              Every burger is smashed on a blistering 230°C flat top to achieve that signature lacy crust. Every pot of biryani and karahi is layered with freshly roasted spices. Whether you're dropping by for a quick lunch or ordering for a group dinner, our kitchen is dedicated to quality, consistency, and generous flavor.
            </p>

            <div className="about-pillars">
              <div className="about-pillar-item">
                <div className="pillar-icon-box">
                  <Flame size={18} />
                </div>
                <div>
                  <h4 className="pillar-title">Smashed to Order</h4>
                  <p className="pillar-text">Fresh, never frozen beef and chicken cooked at high heat.</p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-icon-box">
                  <UtensilsCrossed size={18} />
                </div>
                <div>
                  <h4 className="pillar-title">Authentic Spicing</h4>
                  <p className="pillar-text">House-crafted sauces, peri-peri dusts, and slow-braised curries.</p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-icon-box">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="pillar-title">Honest Value</h4>
                  <p className="pillar-text">Generous portions, transparent pricing, and seamless ordering.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckeredRibbon height={16} />
    </section>
  );
}
