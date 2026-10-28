import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return undefined;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    let observer;
    let frame;
    let timeout;

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (!target) return false;

      observer?.disconnect();
      frame = window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return true;
    };

    if (!scrollToTarget()) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      observer = new MutationObserver(() => scrollToTarget());
      observer.observe(document.getElementById('root') || document.body, {
        childList: true,
        subtree: true
      });
      timeout = window.setTimeout(() => observer.disconnect(), 10000);
    }

    return () => {
      observer?.disconnect();
      window.clearTimeout(timeout);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname, hash]);

  return null;
}
