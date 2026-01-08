import React, { CSSProperties } from 'react';
import { ScrollHeader } from '../ScrollHeader';
import { ScrollItem } from '../ScrollItem';
import { Items, HeaderBehavior } from '../types';

const collapsedStyles: CSSProperties = { display: 'none' };

type GetItemsProps = {
  items: Items;
  headerBehavior: HeaderBehavior;
  path?: number[];
  collapsedPaths: string[];
};

export const getItems = ({ headerBehavior, items, path = [], collapsedPaths }: GetItemsProps) => {
  const Wrapper = headerBehavior === 'push' ? 'section' : React.Fragment;

  return (
    <section>
      {items.map((item, index) => {
        const currentPath = [...path, index];

        if (item.nestedItems?.length) {
          const isCollapsed = collapsedPaths.includes(currentPath.join('-'));
          const hiddenStyle = isCollapsed ? collapsedStyles : undefined;

          return (
            <Wrapper key={currentPath.join('-')}>
              <ScrollHeader path={currentPath} itemRender={item.render} itemId={item.id} />
              <section style={hiddenStyle}>
                {getItems({ items: item.nestedItems, headerBehavior, path: currentPath, collapsedPaths })}
              </section>
            </Wrapper>
          );
        } else {
          return <ScrollItem key={currentPath.join('-')} itemRender={item.render} itemId={item.id} />;
        }
      })}
    </section>
  );
};
