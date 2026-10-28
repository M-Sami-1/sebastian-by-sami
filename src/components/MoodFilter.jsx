import React from 'react';
import { Sparkles, Flame, Cookie, Moon, Utensils, Zap } from 'lucide-react';

const MOODS = [
  { id: 'All', label: 'All Moods', icon: Sparkles },
  { id: 'Starving', label: 'Starving', icon: Utensils },
  { id: 'Crunchy', label: 'Crunchy', icon: Zap },
  { id: 'Spicy', label: 'Spicy', icon: Flame },
  { id: 'Sweet tooth', label: 'Sweet tooth', icon: Cookie },
  { id: 'Snacky', label: 'Snacky', icon: Sparkles },
  { id: 'Late night', label: 'Late night', icon: Moon }
];

export function MoodFilter({ selectedMood, onSelectMood }) {
  return (
    <div className="mood-filter-wrapper">
      <div className="mood-filter-header">
        <h2 className="mood-title">WHAT'S THE MOOD?</h2>
        <p className="mood-subtitle">
          Tell us how you feel. We'll tell you what to eat, how hot it runs, and how many napkins to grab.
        </p>
      </div>

      <div className="mood-pill-list" role="group" aria-label="Filter menu by mood">
        {MOODS.map(mood => {
          const isActive = (selectedMood || 'All').toLowerCase() === mood.id.toLowerCase();
          const Icon = mood.icon;
          return (
            <button
              key={mood.id}
              type="button"
              className={`mood-pill ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectMood(mood.id === 'All' ? '' : mood.id)}
              aria-pressed={isActive}
            >
              <Icon size={14} className="mood-pill-icon" aria-hidden="true" />
              <span>{mood.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
