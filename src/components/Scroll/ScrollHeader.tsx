import React, { CSSProperties, useCallback, useEffect, useMemo, useRef } from 'react';
import { useScrollContext } from './Scroll.provider';
import { Item } from './types';

interface IScrollHeaderProps {
  path: number[];
  itemRender: Item['render'];
  itemId?: Item['id'];
}

export const ScrollHeader: React.FC<IScrollHeaderProps> = ({ path, itemId, itemRender }) => {
  const {
    getTopHeadersTotalHeight,
    getBottomHeadersTotalHeight,
    scrollToView,
    stickTo,
    headerBehavior,
    addHeader,
    headerCollaspeClose,
    headerCollaspeOpen,
    collapsedPaths,
  } = useScrollContext();

  const ref = useRef<HTMLLIElement | null>(null);

  const handleClick = () => {
    scrollToView(path);
  };

  useEffect(() => {
    if (ref.current) {
      const currentElement = ref.current as HTMLLIElement;

      addHeader(currentElement, path);
    }
  }, [ref]);

  const behaviorStyle = useMemo(() => {
    if (headerBehavior === 'stick') {
      let top: CSSProperties['top'] = 'auto';
      let bottom: CSSProperties['bottom'] = 'auto';

      top = stickTo === 'top' || stickTo === 'all' ? getTopHeadersTotalHeight(path) : 'auto';
      bottom = stickTo === 'bottom' || stickTo === 'all' ? getBottomHeadersTotalHeight(path) : 'auto';

      return { top, bottom, zIndex: 100 - path.length };
    } else if (headerBehavior === 'push') {
      const top: CSSProperties['top'] = getTopHeadersTotalHeight(path);
      return { top, zIndex: 100 - path.length };
    }
  }, [headerBehavior, path, stickTo]);

  const memoizedHeaderCollapseOpen = useCallback(() => headerCollaspeOpen(path), [headerCollaspeOpen, path]);
  const memoizedHeaderCollapseClose = useCallback(() => headerCollaspeClose(path), [headerCollaspeClose, path]);
  const isCollapsed = useMemo(() => collapsedPaths.includes(path.join('-')), [collapsedPaths]);

  const momoizedHeader = useMemo(
    () =>
      itemRender({
        collapse: {
          open: memoizedHeaderCollapseOpen,
          close: memoizedHeaderCollapseClose,
          isOpen: !isCollapsed,
        },
      }),
    [itemRender, isCollapsed, memoizedHeaderCollapseOpen, memoizedHeaderCollapseClose],
  );

  return (
    <li
      id={itemId}
      onClick={handleClick}
      className={`scroll-header ${headerBehavior} `}
      style={{ ...behaviorStyle }}
      aria-label="Scroll Header"
      role="heading"
      aria-level={path.length}
      ref={ref}
    >
      {momoizedHeader}
    </li>
  );
};
