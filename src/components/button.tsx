import React from 'react';

// Definindo as props do componente
interface ButtonProps {
  label: string; // Texto exibido no botão
  onClick: () => void; // Função chamada ao clicar no botão
  size?: 'small' | 'medium' | 'large'; // Tamanho do botão
  variant?: 'primary' | 'secondary'; // Variante do botão
  disabled?: boolean;
}

// Criando o componente Button
const Button: React.FC<ButtonProps> = ({ label, onClick, size = 'medium', variant = 'primary',  disabled = false  }) => {
  // Estilos de botão baseados em tamanho e variante
  const sizeStyle = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }[size];

  const variantStyle = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  }[variant];

  return (
    <button
      onClick={onClick}
      className={`rounded ${sizeStyle} ${variantStyle} font-semibold transition-colors`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
