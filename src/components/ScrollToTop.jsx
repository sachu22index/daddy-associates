import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Auto-scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  // Show floating button on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 320) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      title="Back to Top"
    >
      <ChevronUp size={22} />
    </button>
  );
}
