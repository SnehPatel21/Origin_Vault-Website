import React, { useEffect, useState } from 'react';

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setDotPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    
    const interactiveElements = document.querySelectorAll('button, a');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleHoverStart);
      element.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleHoverStart);
        element.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${dotPosition.x - 2}px, ${dotPosition.y - 2}px)`,
        }}
      />
    </>
  );
}