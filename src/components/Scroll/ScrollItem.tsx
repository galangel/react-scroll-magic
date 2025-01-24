import React from 'react';
import { Item } from './types';

interface IScrollItemProps {
  itemRender: Item['render'];
  itemId?: Item['id'];
}

export const ScrollItem: React.FC<IScrollItemProps> = ({ itemRender, itemId }) => {
  return (
    <li id={itemId} role="listitem" aria-label="Scroll Item" className={`scroll-item `}>
      {itemRender({})}
    </li>
  );
};
