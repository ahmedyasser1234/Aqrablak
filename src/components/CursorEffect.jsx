import React, { useEffect, useState, useRef } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const requestRef = useRef(null);
  const particleIdCounter = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    const handleMouseMove = (e) => {
      if (!isDesktop) return;
      setPosition({ x: e.clientX, y: e.clientY });
      
      const newParticle = {
        id: particleIdCounter.current++,
        x: e.clientX + 15,
        y: e.clientY + 25, 
        size: Math.random() * 8 + 4,
        opacity: 0.6,
        life: 1,
      };
      
      setParticles((prev) => [...prev.slice(-20), newParticle]);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;

    const updateParticles = () => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            life: p.life - 0.02,
            opacity: p.opacity - 0.015,
            size: p.size + 0.5,
            y: p.y + 0.5, 
          }))
          .filter((p) => p.life > 0)
      );
      requestRef.current = requestAnimationFrame(updateParticles);
    };

    requestRef.current = requestAnimationFrame(updateParticles);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isDesktop]);

  // لا يتم عرض أي شيء في وضع الريسبونسيف
  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* جسيمات الدخان */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gray-400/30 blur-sm"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* الصاروخ (الماوس) */}
      <div
        className="absolute text-3xl select-none"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-15%, -15%) rotate(-60deg)',
          transition: 'transform 0.05s ease-out',
        }}
      >
        🛸
      </div>
    </div>
  );
};

export default CursorEffect;