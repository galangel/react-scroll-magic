import React from 'react';

export const ScrollItem: React.FC<React.PropsWithChildren<React.LiHTMLAttributes<HTMLLIElement>>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <li role="listitem" aria-label="Scroll Item" className={`scroll-item ${className}`} {...props}>
      {children}
    </li>
  );
};
