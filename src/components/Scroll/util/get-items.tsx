import React, { CSSProperties } from 'react';
import { ScrollHeader } from '../ScrollHeader';
import { ScrollItem } from '../ScrollItem';
import { Items, HeaderBehavior } from '../types';

const hiddenStyles: CSSProperties = { visibility: 'hidden', position: 'absolute', width: '0', height: '0' };

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
          const hiddenStyle = collapsedPaths.includes(currentPath.join('-')) ? hiddenStyles : {};

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
