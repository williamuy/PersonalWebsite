// Button.tsx
import React from 'react';

type ButtonProps = {
  color: 'black' | 'white';
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ color, children }) => {
  const baseClasses = 'px-6 py-3 rounded font-semibold text-lg transition-colors duration-300';
  const colorClasses = color === 'black' ? 'bg-black text-white' : 'bg-white text-black border-2 border-black ml-4';

  return (
    <button className={`${baseClasses} ${colorClasses}`}>
      {children}
    </button>
  );
};

export default Button;
