import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer API
 * 
 * @param {Object} options - Intersection Observer options
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 * 
 * Requirements: 5.3, 5.5, 15.3
 */
function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fallback for browsers without Intersection Observer support
    if (!('IntersectionObserver' in window)) {
      // Gracefully degrade by making content visible immediately
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger animation once when element enters viewport
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        ...options
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible, options]);

  return [ref, isVisible];
}

export default useScrollAnimation;
