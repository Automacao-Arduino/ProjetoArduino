import React from 'react';

interface HeaderProps {
  className?: string;
}

const Headerpage: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={`bg-slate-200 w-full h-16 ${className || ''}`}>
    
    </div>
  );
};

export default Headerpage;
