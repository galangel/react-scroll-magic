import React, { useEffect, useMemo, useRef } from 'react';
import { useScrollContext } from './Scroll.provider';

interface IScrollHeaderProps extends React.PropsWithChildren<React.LiHTMLAttributes<HTMLLIElement>> {}

export const ScrollHeader: React.FC<IScrollHeaderProps> = ({ children, style = {}, className = '', ...props }) => {
  const { getStickedHeadersTotalHeight, addHeader, scrollToView, stickTo, headers, headerBehavior } =
    useScrollContext();

  const headerIndex = useRef(0);

  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const currentElement = ref.current as HTMLLIElement;

      const index = addHeader(currentElement);

      headerIndex.current = index;
    }
  }, [ref]);
  const handleClick = () => {
    if (ref.current) {
      scrollToView(ref.current, headerIndex.current);
    }
  };

  const behaviorStyle = useMemo(() => {
    if (headerBehavior === 'stick') {
      const top =
        stickTo === 'top' || stickTo === 'all' ? getStickedHeadersTotalHeight(0, headerIndex.current) : 'auto';
      const bottom =
        stickTo === 'bottom' || stickTo === 'all'
          ? getStickedHeadersTotalHeight(headerIndex.current + 1, headers.length)
          : 'auto';

      return { top, bottom };
    }
  }, [headerBehavior, headerIndex.current, stickTo, headers]);

  return (
    <li
      onClick={headerBehavior === 'stick' ? handleClick : undefined}
      className={`scroll-header ${headerBehavior} ${className}`}
      style={{ ...style, ...behaviorStyle }}
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
