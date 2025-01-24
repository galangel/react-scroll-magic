import React, { useCallback, useEffect, useRef } from 'react';
import { useScrollContext } from './Scroll.provider';
import { Items, Loading } from './types';
import { getItems } from './util/get-items';
import { ScrollLoading } from './ScrollLoading';

interface IScrollListProps {
  items: Items;
  loading?: Loading;
}

export const ScrollList: React.FC<IScrollListProps> = ({ items, loading }) => {
  const { setListRef, headerBehavior, collapsedPaths } = useScrollContext();
  const [isLoading, setisLoading] = React.useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      setListRef(listRef.current);
    }
  }, [listRef]);

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLUListElement>) => {
      if (items.length === 0 || !loading?.onBottomReached) return;

      const target = e.target as HTMLUListElement;
      if (Math.floor(target.scrollHeight - target.scrollTop) < target.clientHeight + 10) {
        if (!target.dataset.loading) {
          target.dataset.loading = 'true';
          setisLoading(true);
          loading.onBottomReached().finally(() => {
            target.dataset.loading = '';
            setisLoading(false);
          });
        }
      }
    },
    [items.length === 0, loading?.onBottomReached],
  );

  return (
    <ul ref={listRef} className={`scroll-list`} onScroll={loading?.onBottomReached ? handleScroll : undefined}>
      {getItems({ items, headerBehavior, collapsedPaths })}
      {loading?.render ? loading.render(isLoading) : <ScrollLoading loading={isLoading} />}
    </ul>
  );
};
