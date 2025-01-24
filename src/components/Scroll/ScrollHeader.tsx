import React, { CSSProperties, useEffect, useMemo, useRef } from 'react';
import { useScrollContext } from './Scroll.provider';

interface IScrollHeaderProps extends React.PropsWithChildren<React.LiHTMLAttributes<HTMLLIElement>> {
  path: number[];
}

export const ScrollHeader: React.FC<IScrollHeaderProps> = ({
  children,
  path,
  style = {},
  className = '',
  ...props
}) => {
  const headerIndex = path[path.length - 1];
  const { getTopHeadersTotalHeight, getBottomHeadersTotalHeight, scrollToView, stickTo, headerBehavior, addHeader } =
    useScrollContext();

  const ref = useRef<HTMLLIElement | null>(null);

  const handleClick = () => {
    scrollToView(path);
  };

  useEffect(() => {
    if (ref.current) {
      const currentElement = ref.current as HTMLLIElement;

      addHeader(currentElement, path);
    }
  }, [ref]);

  const behaviorStyle = useMemo(() => {
    if (headerBehavior === 'stick') {
      let top: CSSProperties['top'] = 'auto';
      let bottom: CSSProperties['bottom'] = 'auto';

      top = stickTo === 'top' || stickTo === 'all' ? getTopHeadersTotalHeight(path) : 'auto';
      bottom = stickTo === 'bottom' || stickTo === 'all' ? getBottomHeadersTotalHeight(path) : 'auto';

      return { top, bottom, zIndex: 100 - path.length };
    } else if (headerBehavior === 'push') {
      const top: CSSProperties['top'] = getTopHeadersTotalHeight(path);
      return { top, zIndex: 100 - path.length };
    }
  }, [headerBehavior, path, stickTo]);

  return (
    <li
      onClick={handleClick}
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
