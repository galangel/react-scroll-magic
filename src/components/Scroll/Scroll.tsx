import React from 'react';
import { HeadersProvider } from './Scroll.provider';
import { ScrollList } from './ScrollList';
import type { StickTo } from './types';

interface IScrollProps extends React.PropsWithChildren<React.LiHTMLAttributes<HTMLUListElement>> {
  stickTo?: StickTo;
  scrollBehavior?: ScrollBehavior;
}

export const Scroll: React.FC<IScrollProps> = ({ stickTo, scrollBehavior, ...props }) => {
  return (
    <HeadersProvider stickTo={stickTo} scrollBehavior={scrollBehavior}>
      <ScrollList {...props} />
    </HeadersProvider>
  );
};
