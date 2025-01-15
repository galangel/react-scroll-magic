import React, { useEffect, useRef } from 'react';
import { useScrollContext } from './Scroll.provider';

export const ScrollList: React.FC<React.PropsWithChildren<React.LiHTMLAttributes<HTMLUListElement>>> = ({
  children,
  className = '',
  ...props
}) => {
  const { setListRef } = useScrollContext();

  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      setListRef(listRef.current);
    }
  }, [listRef]);

  return (
    <ul ref={listRef} className={`scroll-list ${className}`} {...props}>
      {children}
    </ul>
  );
};
