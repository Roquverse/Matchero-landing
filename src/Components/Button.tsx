import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'text';
  size?: 'sm' | 'md' | 'lg';
  color?: 'green' | 'white' | 'gray';
  block?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'filled', 
    size = 'md', 
    color = 'green', 
    block = false, 
    icon, 
    children, 
    className = '', 
    disabled = false,
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg'
    };

    const blockClasses = block ? 'w-full' : '';

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
        case 'text':
          return {
            green: 'bg-transparent text-green-100 hover:bg-green-20 focus:ring-green-100',
            white: 'bg-transparent text-gray-900 hover:bg-gray-50 focus:ring-gray-100',
            gray: 'bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-100'
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
    const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${blockClasses} ${variantClasses} ${className}`;

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled}
        {...props}
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
