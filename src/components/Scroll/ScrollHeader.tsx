import React, { useEffect, useRef } from 'react';
import { useScrollContext } from './Scroll.provider';

interface IScrollHeaderProps extends React.PropsWithChildren<React.LiHTMLAttributes<HTMLLIElement>> {}

export const ScrollHeader: React.FC<IScrollHeaderProps> = ({ children, style = {}, className = '', ...props }) => {
  const { getStickedHeadersTotalHeight, addHeader, scrollToView, stickTo, headers } = useScrollContext();

  const headerIndex = useRef(0);

  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const currentElement = ref.current as HTMLLIElement;

      const index = addHeader(currentElement);

      headerIndex.current = index;
    }
  }, [ref]);

  const top = stickTo === 'top' || stickTo === 'all' ? getStickedHeadersTotalHeight(0, headerIndex.current) : 'auto';
  const bottom =
    stickTo === 'bottom' || stickTo === 'all'
      ? getStickedHeadersTotalHeight(headerIndex.current + 1, headers.length)
      : 'auto';

  const handleClick = () => {
    if (ref.current) {
      scrollToView(ref.current, headerIndex.current);
    }
  };

  return (
    <li
      onClick={handleClick}
      className={`scroll-header ${className}`}
      style={{ ...style, top, bottom }}
      aria-label="Scroll Header"
      role="heading"
      aria-level={1}
      {...props}
      ref={ref}
    >
      {children}
    </li>
  );
};
