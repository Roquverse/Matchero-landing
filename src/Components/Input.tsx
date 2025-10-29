import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, success, disabled, size = 'sm', className = '', ...props }, ref) => {
    const baseClasses = 'w-full rounded border transition-colors duration-200 focus:outline-none';
    
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg'
    };

    const stateClasses = {
      default: 'border-gray-300 bg-white text-gray-900 placeholder-gray-500',
      hover: 'hover:border-gray-400',
      focus: 'focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200',
      error: 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200',
      success: 'border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-200',
      disabled: 'border-gray-300 bg-gray-100 text-gray-400 placeholder-gray-300 cursor-not-allowed'
    };

    const getStateClasses = () => {
      if (disabled) return stateClasses.disabled;
      if (error) return stateClasses.error;
      if (success) return stateClasses.success;
      return `${stateClasses.default} ${stateClasses.hover} ${stateClasses.focus}`;
    };

    const inputClasses = `${baseClasses} ${sizeClasses[size]} ${getStateClasses()} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={inputClasses}
          disabled={disabled}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
