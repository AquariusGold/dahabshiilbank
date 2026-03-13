import React from 'react';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'highlight';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', children, ...props }, ref) => {
    const combinedClasses = `${styles.card} ${styles[`variant-${variant}`]} ${className}`.trim();
    
    return (
      <div className={combinedClasses} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";
