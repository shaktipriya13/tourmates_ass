import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  leftImage,
  className = "",
  ...props 
}) => {
  const baseClasses = 'font-plus-jakarta rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-[2px]';
  
  const variants = {
    primary: 'bg-button-2 text-button-2 hover:bg-blue-700 disabled:bg-gray-400',
    secondary: 'bg-button-1 text-button-1 hover:bg-green-100 disabled:bg-gray-100',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400',
  };
  
  const sizes = {
    small: 'px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm',
    medium: 'px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base',
    large: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants?.[variant]} 
    ${sizes?.[size]} 
    ${fullWidth ? 'w-full' : 'w-auto'} 
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `?.trim()?.replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {leftImage && (
        <img 
          src={leftImage?.src} 
          alt="icon" 
          className={`w-[${leftImage?.width}px] h-[${leftImage?.height}px]`}
        />
      )}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes?.node,
  onClick: PropTypes?.func,
  variant: PropTypes?.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes?.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes?.bool,
  type: PropTypes?.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes?.bool,
  leftImage: PropTypes?.shape({
    src: PropTypes?.string,
    width: PropTypes?.number,
    height: PropTypes?.number
  }),
  className: PropTypes?.string,
};

export default Button;