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
    <ul
      ref={listRef}
      className={`${className} box-border h-full m-0 p-0 w-full list-inside overflow-x-hidden overflow-y-scroll relative`}
      {...props}
    >
      {children}
    </ul>
  );
};
