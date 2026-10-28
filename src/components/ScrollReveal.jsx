import { useEffect } from 'react';

const REVEAL_TARGETS = [
  '.mood-experience-section',
  '.menu-lineup-section',
  '.combos-section',
  '.why-section',
  '.about-brand-section',
  '.mood-showcase-card',
  '.menu-grid > *',
  '.combo-card',
  '.pillar-card',
  '.about-grid > *'
].join(',');

export function ScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    const root = document.documentElement;
    root.classList.add('has-scroll-reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-revealed', entry.isIntersecting);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' });

    const observeTargets = (node = document) => {
      if (node.matches?.(REVEAL_TARGETS)) observer.observe(node);
      node.querySelectorAll?.(REVEAL_TARGETS).forEach((element, index) => {
        if (element.classList.contains('is-revealed')) return;
        element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 55}ms`);
        observer.observe(element);
      });
    };

    observeTargets();
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) observeTargets(node);
      }));
    });
    mutations.observe(document.getElementById('main-content') || document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      root.classList.remove('has-scroll-reveal');
    };
  }, []);

  return null;
}
