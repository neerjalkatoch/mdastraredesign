'use client'
import { useEffect, useRef, useState } from 'react';
import { interpolate } from 'flubber';
import './MorphBlob.css';

// Pre-defined blob SVG paths (same viewBox: 0 0 200 200)
const blobPaths = [
  "M44.7,-76.4C58.8,-69.2,71.8,-58.1,79.6,-44.2C87.4,-30.3,90,-13.6,88.5,2.4C87,18.4,81.4,33.6,72.1,46.1C62.8,58.6,49.8,68.3,35.4,74.8C21,81.3,5.2,84.6,-10.2,83.4C-25.6,82.2,-40.6,76.5,-53.9,67.3C-67.2,58.1,-78.8,45.4,-84.3,30.5C-89.8,15.6,-89.2,-1.5,-84.8,-17.4C-80.4,-33.3,-72.2,-48,-60.1,-56.3C-48,-64.6,-32,-66.5,-17.5,-72.1C-3,-77.7,10,-87,24.4,-87.6C38.8,-88.2,54.4,-80.1,44.7,-76.4Z",
  "M39.9,-67.5C52.3,-60.6,63.6,-50.8,71.3,-38.4C79,-26,83.1,-11.1,82.3,3.4C81.5,17.9,75.8,32,66.8,43.9C57.8,55.8,45.5,65.5,31.8,71.4C18.1,77.3,3,79.4,-12.4,78.1C-27.8,76.8,-43.5,72.1,-56.3,63.2C-69.1,54.3,-79,41.2,-83.4,26.4C-87.8,11.6,-86.7,-4.9,-81.8,-20.1C-76.9,-35.3,-68.2,-49.2,-56.1,-56.3C-44,-63.4,-28.5,-63.7,-14.5,-68.8C-0.5,-73.9,12,-79.8,25.1,-79.3C38.2,-78.8,51.9,-71.9,39.9,-67.5Z",
  "M47.2,-79.7C61.5,-72.3,73.5,-59.8,80.7,-45.1C87.9,-30.4,90.3,-13.5,88.4,2.5C86.5,18.5,80.3,33.6,70.8,46.2C61.3,58.8,48.5,68.9,34.2,75.4C19.9,81.9,4.1,84.8,-11.8,83.5C-27.7,82.2,-43.7,76.7,-57.1,67.2C-70.5,57.7,-81.3,44.2,-86.3,28.9C-91.3,13.6,-90.5,-3.5,-85.4,-19.1C-80.3,-34.7,-70.9,-48.8,-58.3,-56.8C-45.7,-64.8,-29.9,-66.7,-15.1,-72.4C-0.3,-78.1,13.5,-87.6,28.2,-87.8C42.9,-88,58.5,-78.9,47.2,-79.7Z",
  "M41.3,-70.7C54.1,-64.1,65.6,-54.2,73.3,-41.8C81,-29.4,84.9,-14.7,84.5,-0.2C84.1,14.3,79.4,28.6,71.4,41.1C63.4,53.6,52.1,64.3,38.8,71.3C25.5,78.3,10.2,81.6,-4.5,80.8C-19.2,80,-33.3,75.1,-46.1,67.4C-58.9,59.7,-70.4,49.2,-77.4,36.1C-84.4,23,-86.9,7.3,-85.2,-8C-83.5,-23.3,-77.6,-38.2,-67.5,-49.1C-57.4,-60,-43.1,-66.9,-29.3,-72.9C-15.5,-78.9,-2.2,-84,10.3,-83.5C22.8,-83,48.1,-76.9,41.3,-70.7Z",
  "M45.5,-77.3C59.4,-70.4,71.6,-59.4,79.4,-45.8C87.2,-32.2,90.6,-16.1,89.6,-0.6C88.6,14.9,83.2,29.8,74.5,42.5C65.8,55.2,53.8,65.7,40,72.5C26.2,79.3,10.6,82.4,-4.3,81.7C-19.2,81,-33.4,76.5,-46.7,69.2C-60,61.9,-72.4,51.8,-80,38.7C-87.6,25.6,-90.4,9.5,-88.3,-5.8C-86.2,-21.1,-79.2,-35.6,-69.1,-47.1C-59,-58.6,-45.8,-67.1,-32.1,-73.8C-18.4,-80.5,-4.2,-85.4,9.4,-84.6C23,-83.8,45.4,-77.3,45.5,-77.3Z"
];

const MorphBlob = ({ className = '' }) => {
  const pathRef = useRef(null);
  const animationRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  const ANIMATION_DURATION = 10000; // 10 seconds per morph cycle

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Animation loop - directly manipulates DOM, no React re-renders
  useEffect(() => {
    if (reducedMotion || !pathRef.current) return;

    let currentIndex = 0;
    let startTime = null;
    let currentInterpolator = interpolate(blobPaths[0], blobPaths[1], {
      maxSegmentLength: 10
    });

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = (elapsed % ANIMATION_DURATION) / ANIMATION_DURATION;

      // Move to next shape when cycle completes
      if (elapsed >= ANIMATION_DURATION) {
        startTime = timestamp;
        currentIndex = (currentIndex + 1) % blobPaths.length;
        const nextIndex = (currentIndex + 1) % blobPaths.length;
        currentInterpolator = interpolate(blobPaths[currentIndex], blobPaths[nextIndex], {
          maxSegmentLength: 10
        });
      }

      // EaseInOutSine for smooth feel
      const easedProgress = -(Math.cos(Math.PI * progress) - 1) / 2;

      // Directly update DOM - no React re-render
      if (pathRef.current) {
        pathRef.current.setAttribute('d', currentInterpolator(easedProgress));
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [reducedMotion]);

  return (
    <div className={`morph-blob-container ${className}`}>
      <svg
        className="morph-blob"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-accent)" />
          </linearGradient>
        </defs>
        <g transform="translate(100 100)">
          <path
            ref={pathRef}
            d={blobPaths[0]}
            fill="url(#blobGradient)"
          />
        </g>
      </svg>
    </div>
  );
};

export default MorphBlob;
