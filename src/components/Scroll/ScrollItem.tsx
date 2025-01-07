import React from 'react';

export const ScrollItem: React.FC<React.PropsWithChildren<React.LiHTMLAttributes<HTMLLIElement>>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <li
      role="listitem"
      className={`${className} flex w-full box-border relative p-0 m-0 border-none list-none`}
      {...props}
    >
      {children}
    </li>
  );
};
