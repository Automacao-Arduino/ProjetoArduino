import React from 'react';
import { Button } from 'antd';

interface AntButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string; 
}
const AntButton: React.FC<AntButtonProps> = ({ type = 'default', onClick, children, className }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={`${type === 'primary' ? 'bg-gradient-to-r  text-white border-spacing-4 border-black  hover:from-blue-500 hover:to-cyan-500' : ''} ${className || ''}`}
    >
      {children}
    </Button>
  );
};

export default AntButton;
