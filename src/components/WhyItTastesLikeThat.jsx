import React from 'react';
import { CheckeredRibbon } from './CheckeredRibbon';

export function WhyItTastesLikeThat() {
  return (
    <section className="why-section" id="why-sebastian" aria-label="Why it tastes like that">
      <CheckeredRibbon height={16} />

      <div className="why-inner-container">
        <div className="why-header">
          <h2 className="why-title">WHY IT TASTES LIKE THAT</h2>
          <p className="why-subtitle">
            No secret menu, no mystery. Just a few sacred kitchen standards we follow daily.
          </p>
        </div>

        <div className="why-pillars-grid">
          {/* Pillar 1 */}
          <div className="pillar-card">
            <span className="pillar-stat">230°C</span>
            <p className="pillar-desc">
              Patties get smashed on a screaming hot cast-iron griddle so the edges caramelize lacy and ultra-crisp.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="pillar-card">
            <span className="pillar-stat">2 slices</span>
            <p className="pillar-desc">
              Thick American cheese goes on while the beef is still sizzling on the grill. That is where the drip comes from.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="pillar-card">
            <span className="pillar-stat">Daily</span>
            <p className="pillar-desc">
              Fluffy brioche buns and lachha parathas arrive fresh every morning and get toasted in pure butter to order.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="pillar-card">
            <span className="pillar-stat">0 frozen</span>
            <p className="pillar-desc">
              Fries are cut fresh, Biryani dum-cooked in small batches, and absolutely nothing sits under a dull heat lamp.
            </p>
          </div>
        </div>
      </div>

      <CheckeredRibbon height={16} />
    </section>
  );
}
