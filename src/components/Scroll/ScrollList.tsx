import React, { useEffect, useRef } from 'react';
import { useScrollContext } from './Scroll.provider';
import { Items } from './types';
import { getItems } from './util/get-items';

interface IScrollListProps {
  items: Items;
}

export const ScrollList: React.FC<IScrollListProps> = ({ items }) => {
  const { setListRef, headerBehavior, collapsedPaths } = useScrollContext();

  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      setListRef(listRef.current);
    }
  }, [listRef]);

  return (
    <ul ref={listRef} className={`scroll-list`}>
      {getItems({ items, headerBehavior, collapsedPaths })}
    </ul>
  );
};
