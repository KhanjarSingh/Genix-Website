import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.r');
    if (!els.length) return;
    const io = new IntersectionObserver(
      es => es.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
        } else {
          e.target.classList.remove('in');
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
