import React from 'react';
import '../css/DiagonalGradientBackground.css';

interface DiagonalGradientBackgroundProps {
  colors: string[]; // Example: ['#4f219a', '#1a1035', '#000000']
  children?: React.ReactNode;
}

const DiagonalGradientBackground: React.FC<DiagonalGradientBackgroundProps> = ({ colors, children }) => {
  const gradientString = `linear-gradient(-45deg, ${colors.join(', ')})`;

  return (
    <div 
      className="diagonal-bg" 
      style={{ '--bg-gradient': gradientString } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default DiagonalGradientBackground;