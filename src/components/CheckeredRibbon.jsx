import React from 'react';

/**
 * Checkered ribbon divider replicating the iconic racing-flag pattern from the design inspo
 */
export function CheckeredRibbon({ height = 18, className = '' }) {
  return (
    <div
      className={`checkered-ribbon ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    />
  );
}
