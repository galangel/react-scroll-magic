import React, { useEffect, useRef } from 'react';
import { useScrollContext } from './Scroll.provider';
import { HeaderBehavior, Items } from './types';
import { ScrollHeader } from './ScrollHeader';
import { ScrollItem } from './ScrollItem';

const getItems = (items: Items, headerBehavior: HeaderBehavior, path: number[] = []) => {
  return (
    <React.Fragment>
      {items.map((item, index) => {
        const currentPath = [...path, index];
        if (item.nestedItems?.length) {
          if (headerBehavior === 'push') {
            return (
              <section key={currentPath.join('-')}>
                <ScrollHeader path={currentPath}>{item.render()}</ScrollHeader>
                {getItems(item.nestedItems, headerBehavior, currentPath)}
              </section>
            );
          } else {
            return (
              <React.Fragment key={currentPath.join('-')}>
                <ScrollHeader path={currentPath}>{item.render()}</ScrollHeader>
                {getItems(item.nestedItems, headerBehavior, currentPath)}
              </React.Fragment>
            );
          }
        } else {
          return <ScrollItem key={currentPath.join('-')}>{item.render()}</ScrollItem>;
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
