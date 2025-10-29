import { forwardRef, useState } from 'react';
import type { ButtonHTMLAttributes } from 'react';

export interface LikeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onLike?: () => void;
  onDislike?: () => void;
}

const LikeButton = forwardRef<HTMLButtonElement, LikeButtonProps>(
  ({ 
    size = 'md', 
    className = '', 
    disabled = false,
    onLike,
    onDislike,
    ...props 
  }, ref) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg'
    };

    const handleLike = () => {
      if (isLiked) {
        setIsLiked(false);
      } else {
        setIsLiked(true);
        setIsDisliked(false);
        onLike?.();
      }
    };

    const handleDislike = () => {
      if (isDisliked) {
        setIsDisliked(false);
      } else {
        setIsDisliked(true);
        setIsLiked(false);
        onDislike?.();
      }
    };

    const getStateClasses = () => {
      if (disabled) {
        return 'bg-cyan-20 text-gray-400 border-cyan-20';
      }
      
      if (isLiked || isDisliked) {
        return 'bg-green-100 text-white hover:bg-green-80 focus:ring-green-100';
      }
      
      return 'bg-white text-gray-500 border border-gray-300 hover:bg-green-20 hover:border-green-100 hover:text-green-100 focus:ring-green-100';
    };

    const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${getStateClasses()} ${className}`;

    return (
      <div className="flex items-center space-x-1">
        <button
          ref={ref}
          className={buttonClasses}
          disabled={disabled}
          onClick={handleLike}
          {...props}
        >
          <svg 
            className="w-4 h-4" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.834a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
        </button>
        
        <button
          className={buttonClasses}
          disabled={disabled}
          onClick={handleDislike}
        >
          <svg 
            className="w-4 h-4 transform rotate-180" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.834a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
        </button>
      </div>
    );
  }
);

LikeButton.displayName = 'LikeButton';

export default LikeButton;
