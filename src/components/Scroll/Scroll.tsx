import React from 'react';
import { HeadersProvider } from './Scroll.provider';
import { ScrollList } from './ScrollList';
import type { HeaderBehavior, Items, StickTo } from './types';

interface IScrollProps {
  stickTo?: StickTo;
  scrollBehavior?: ScrollBehavior;
  headerBehavior?: HeaderBehavior;
  items: Items;
}

export const Scroll: React.FC<IScrollProps> = ({ stickTo, scrollBehavior, headerBehavior, items }) => {
  return (
    <HeadersProvider headerBehavior={headerBehavior} stickTo={stickTo} scrollBehavior={scrollBehavior}>
      <ScrollList items={items} />
    </HeadersProvider>
  );
};
