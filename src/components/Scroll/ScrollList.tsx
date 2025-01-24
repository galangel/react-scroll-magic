import React, { useEffect, useRef } from 'react';
import { useScrollContext } from './Scroll.provider';
import { HeaderBehavior, Items } from './types';
import { ScrollHeader } from './ScrollHeader';
import { ScrollItem } from './ScrollItem';

const getItems = (items: Items, headerBehavior: HeaderBehavior, path: number[] = []) => {
  const Wrapper = headerBehavior === 'push' ? 'section' : React.Fragment;

  return (
    <section>
      {items.map((item, index) => {
        const currentPath = [...path, index];

        if (item.nestedItems?.length) {
          return (
            <Wrapper key={currentPath.join('-')}>
              <ScrollHeader path={currentPath}>{item.render()}</ScrollHeader>
              {getItems(item.nestedItems, headerBehavior, currentPath)}
            </Wrapper>
          );
        } else {
          return <ScrollItem key={currentPath.join('-')}>{item.render()}</ScrollItem>;
        }
      })}
    </section>
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
