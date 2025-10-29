import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  color?: 'green' | 'white' | 'gray';
  icon: ReactNode;
  className?: string;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ 
    variant = 'filled', 
    size = 'md', 
    color = 'green', 
    icon, 
    className = '', 
    disabled = false,
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const sizeClasses = {
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg'
    };

    const getVariantClasses = () => {
      if (disabled) {
        return {
          green: 'bg-cyan-20 text-gray-400 border-cyan-20',
          white: 'bg-cyan-20 text-gray-400 border-cyan-20',
          gray: 'bg-cyan-20 text-gray-400 border-cyan-20'
        };
      }

      switch (variant) {
        case 'filled':
          return {
            green: 'bg-green-100 text-white hover:bg-green-80 focus:ring-green-100',
            white: 'bg-white text-green-100 hover:bg-gray-50 focus:ring-green-100',
            gray: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-100'
          };
        case 'outlined':
          return {
            green: 'bg-white text-green-100 border-2 border-green-100 hover:bg-green-20 focus:ring-green-100',
            white: 'bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50 focus:ring-gray-100',
            gray: 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 focus:ring-gray-100'
          };
        default:
          return {
            green: 'bg-green-100 text-white hover:bg-green-80 focus:ring-green-100',
            white: 'bg-white text-green-100 hover:bg-gray-50 focus:ring-green-100',
            gray: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-100'
          };
      }
    };

    const variantClasses = getVariantClasses()[color];
    const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`;

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
