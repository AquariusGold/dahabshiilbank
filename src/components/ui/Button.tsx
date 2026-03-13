import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Construct classnames
    const baseClass = styles.button;
    const variantClass = styles[`variant-${variant}`];
    const sizeClass = styles[`size-${size}`];
    
    const combinedClasses = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

    return (
      <Comp
        className={combinedClasses}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
