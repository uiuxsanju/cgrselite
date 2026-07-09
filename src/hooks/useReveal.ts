import { useEffect, useRef } from 'react';

/**
 * Adds .is-visible to .reveal elements inside the returned ref when they
 * scroll into view. Also watches for dynamically added elements (e.g. after
 * filtering) via MutationObserver so they get revealed too.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const showAll = () =>
      root
        .querySelectorAll<HTMLElement>('.reveal')
        .forEach((el) => el.classList.add('is-visible'));

    if (!('IntersectionObserver' in window)) {
      showAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = () =>
      root
        .querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
        .forEach((el) => io.observe(el));

    observeAll();

    // Watch for elements added later (filters, tabs, dynamic lists)
    const mo = new MutationObserver(() => observeAll());
    mo.observe(root, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return ref;
}