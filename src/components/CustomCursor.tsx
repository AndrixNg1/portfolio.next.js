'use client'


import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverOn = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') || 
          target.closest('button')) {
        setLinkHovered(true);
      }
    };

    const handleLinkHoverOff = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') || 
          target.closest('button')) {
        setLinkHovered(false);
      }
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleLinkHoverOn);
    document.addEventListener('mouseout', handleLinkHoverOff);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleLinkHoverOn);
      document.removeEventListener('mouseout', handleLinkHoverOff);
    };
  }, []);

  // Don't show on touch devices
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <>
      {/* Outer cursor */}
      <div
        className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 transition-transform duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: 'white',
          transition: 'opacity 0.3s ease, transform 0.2s ease',
        }}
      />
      
      {/* Inner cursor */}
      <div
        className={`fixed w-1 h-1 rounded-full pointer-events-none z-50 transition-transform duration-200 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${linkHovered ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: 'white',
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;