import React, { useEffect, useRef } from 'react';
import { useScrollContext } from './Scroll.provider';
import { HeaderBehavior, Items } from './types';
import { ScrollHeader } from './ScrollHeader';
import { ScrollItem } from './ScrollItem';

const getItems = (items: Items, headerBehavior: HeaderBehavior, parentKey = '') => {
  return (
    <React.Fragment>
      {items.map((item, index) => {
        const uniqueKey = `${parentKey}-${index}`;
        if (item.nestedItems?.length) {
          if (headerBehavior === 'push') {
            return (
              <section key={uniqueKey}>
                <ScrollHeader>{item.render()}</ScrollHeader>
                {getItems(item.nestedItems, headerBehavior, uniqueKey)}
              </section>
            );
          } else {
            return (
              <React.Fragment key={uniqueKey}>
                <ScrollHeader>{item.render()}</ScrollHeader>
                {getItems(item.nestedItems, headerBehavior, uniqueKey)}
              </React.Fragment>
            );
          }
        } else {
          return <ScrollItem key={uniqueKey}>{item.render()}</ScrollItem>;
        }
      })}
    </React.Fragment>
  );
};

interface IScrollListProps {
  items: Items;
}

export const ScrollList: React.FC<IScrollListProps> = ({ items }) => {
  const { setListRef, headerBehavior } = useScrollContext();

  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      setListRef(listRef.current);
    }
  }, [listRef]);

  return (
    <ul ref={listRef} className={`scroll-list`}>
      {getItems(items, headerBehavior)}
    </ul>
  );
};
