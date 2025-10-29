import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import Button from './Button';

export interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'text';
  size?: 'sm' | 'md' | 'lg';
  color?: 'green' | 'white' | 'gray';
  icon?: ReactNode;
  href?: string;
  className?: string;
  children?: ReactNode;
}

const NavButton = forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ 
    variant = 'filled', 
    size = 'sm', 
    color = 'green', 
    icon, 
    href,
    className = '', 
    children,
    ...props 
  }, ref) => {
    const buttonContent = (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        color={color}
        icon={icon}
        className={className}
        {...props}
      >
        {children}
      </Button>
    );

    if (href) {
      return (
        <a href={href} className="inline-block">
          {buttonContent}
        </a>
      );
    }

    return buttonContent;
  }
);

NavButton.displayName = 'NavButton';

export default NavButton;
