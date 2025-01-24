import React from 'react';
import { HeadersProvider } from './Scroll.provider';
import { ScrollList } from './ScrollList';
import type { HeaderBehavior, Items, Loading, StickTo } from './types';

interface IScrollProps {
  stickTo?: StickTo;
  scrollBehavior?: ScrollBehavior;
  headerBehavior?: HeaderBehavior;
  items: Items;
  loading?: Loading;
}

export const Scroll: React.FC<IScrollProps> = ({ stickTo, scrollBehavior, headerBehavior, loading, items }) => {
  return (
    <HeadersProvider headerBehavior={headerBehavior} stickTo={stickTo} scrollBehavior={scrollBehavior}>
      <ScrollList loading={loading} items={items} />
    </HeadersProvider>
  );
};
