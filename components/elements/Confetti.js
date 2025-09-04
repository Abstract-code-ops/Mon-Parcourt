'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Confetti = ({ isActive, duration = 3000 }) => {
  const [particles, setParticles] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isActive || !mounted) return;

    // Create confetti particles
    const newParticles = [];
    const colors = ['#032B66', '#5E789C', '#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57'];
    
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        speedY: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        shape: Math.random() > 0.5 ? 'circle' : 'square'
      });
    }
    
    setParticles(newParticles);

    // Animate particles
    let animationId;
    const animate = () => {
      setParticles(current => 
        current
          .map(particle => ({
            ...particle,
            y: particle.y + particle.speedY,
            x: particle.x + particle.speedX,
            rotation: particle.rotation + particle.rotationSpeed,
            speedY: particle.speedY + 0.1 // gravity
          }))
          .filter(particle => particle.y < window.innerHeight + 50)
      );
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);

    // Clean up after duration
    const timeout = setTimeout(() => {
      setParticles([]);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    }, duration);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      clearTimeout(timeout);
    };
  }, [isActive, duration, mounted]);

  if (!mounted || !isActive || particles.length === 0) return null;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999999999,
        overflow: 'hidden'
      }}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: particle.shape === 'circle' ? '50%' : '0',
            transform: `rotate(${particle.rotation}deg)`,
            transition: 'none',
            pointerEvents: 'none'
          }}
        />
      ))}
    </div>,
    document.body
  );
};

export default Confetti;
