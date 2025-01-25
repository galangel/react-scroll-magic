import React, { PropsWithChildren, useRef, useState } from 'react';
import type { HeaderBehavior, StickTo } from './types';

const getPathsbreakdown = (path: number[] = []): number[][] => {
  const range = path.slice(0, path.length - 1);
  const keys = range.map((_, index) => path.slice(0, index + 1));
  return keys;
};

export type ScrollContextType = {
  stickTo: StickTo;
  scrollBehavior: ScrollBehavior;
  getTopHeadersTotalHeight: (path: number[]) => number;
  getBottomHeadersTotalHeight: (path: number[]) => number;
  scrollToView: (path: number[]) => void;
  setListRef: (listRef: HTMLUListElement) => void;
  headerBehavior: HeaderBehavior;
  addHeader: (header: HTMLLIElement, path: number[]) => void;
  headerCollaspeOpen: (path: number[]) => void;
  headerCollaspeClose: (path: number[]) => void;
  collapsedPaths: string[];
};

const HeadersContext = React.createContext<ScrollContextType>({
  getTopHeadersTotalHeight: () => 0,
  getBottomHeadersTotalHeight: () => 0,
  scrollToView: () => {},
  setListRef: () => {},
  stickTo: 'all',
  scrollBehavior: 'smooth',
  headerBehavior: 'none',
  addHeader: () => {},
  headerCollaspeOpen: () => {},
  headerCollaspeClose: () => {},
  collapsedPaths: [],
});

export const useScrollContext = () => React.useContext(HeadersContext);

interface IHeadersProvider extends PropsWithChildren {
  stickTo?: StickTo;
  scrollBehavior?: ScrollBehavior;
  headerBehavior?: HeaderBehavior;
}

export const HeadersProvider: React.FC<IHeadersProvider> = ({
  children,
  stickTo = 'all',
  scrollBehavior = 'smooth',
  headerBehavior = 'none',
}) => {
  const [listRef, setListRef] = useState<HTMLUListElement | null>(null);
  const [collapsedPaths, setCollapsedPaths] = useState<string[]>([]);

  const headers = useRef<{ [key: string]: HTMLLIElement }>({});

  const scrollToView = (path: number[]) => {
    const header = headers.current[path.join('-')];
    const nextItem = header.nextElementSibling as HTMLLIElement;

    if (listRef && nextItem) {
      const nextItemStyles = window.getComputedStyle(nextItem);

      const headerHeight = header.getBoundingClientRect().height;
      const headersOffset = getTopHeadersTotalHeight(path);

      const nextItemStyleOffset =
        parseFloat(nextItemStyles.marginTop) +
        parseFloat(nextItemStyles.marginBottom) +
        parseFloat(nextItemStyles.paddingTop) +
        parseFloat(nextItemStyles.paddingBottom) +
        parseFloat(nextItemStyles.borderTopWidth) +
        parseFloat(nextItemStyles.borderBottomWidth);

      const top =
        stickTo === 'bottom'
          ? Math.ceil(nextItem.offsetTop - headerHeight)
          : Math.ceil(nextItem.offsetTop - headersOffset - headerHeight + nextItemStyleOffset);

      listRef.scrollTo({ top, behavior: scrollBehavior });
    }
  };

  const addHeader = (header: HTMLLIElement, path: number[]) => {
    headers.current[path.join('-')] = header;
  };

  const getTopHeadersTotalHeight = (path: number[] = []) => {
    const pathBreakdown = getPathsbreakdown(path);
    const targetPaths = pathBreakdown.map((item) => item.join('-'));

    if (headerBehavior === 'stick') {
      const parentSibilings = pathBreakdown.reduce((acc, path) => {
        const headerIndex = path[path.length - 1];
        const siblings = Array.from({ length: headerIndex }, (_, index) => [
          ...path.slice(0, path.length - 1),
          index,
        ]).map((item) => item.join('-'));
        acc.push(...siblings);
        return acc;
      }, [] as string[]);
      targetPaths.push(...parentSibilings);

      const headerIndex = path[path.length - 1];
      const pathSibilings = Array.from({ length: headerIndex }, (_, index) => [
        ...path.slice(0, path.length - 1),
        index,
      ]).map((item) => item.join('-'));
      targetPaths.push(...pathSibilings);
    }

    const range = targetPaths.map((key) => headers.current[key]);

    const size = range.reduce((acc, header) => {
      const size = acc + header?.getBoundingClientRect?.().height || 0;

      return size;
    }, 0);

    return size;
  };

  const getBottomHeadersTotalHeight = (path: number[] = []): number => {
    const headerIndex = path[path.length - 1];

    const range: HTMLLIElement[] = Object.entries(headers.current).reduce((acc, [key, header]) => {
      const keyPath = key.split('-').map(Number);
      if (keyPath.length === 1 && keyPath[0] > headerIndex) {
        acc.push(header);
      }
      return acc;
    }, [] as HTMLLIElement[]);

    const size = range.reduce((acc, header) => {
      const size = acc + header?.getBoundingClientRect?.().height || 0;

      return size;
    }, 0);

    return size;
  };

  const headerCollaspeOpen = (path: number[]): undefined => {
    const pathString = path.join('-');
    if (collapsedPaths.includes(pathString)) {
      setCollapsedPaths((prev) => prev.filter((item) => item !== pathString));
    }
  };

  const headerCollaspeClose = (path: number[]): undefined => {
    const pathString = path.join('-');
    if (!collapsedPaths.includes(pathString)) {
      setCollapsedPaths((prev) => [...prev, pathString]);
    }
  };

  return (
    <HeadersContext.Provider
      value={{
        addHeader,
        getTopHeadersTotalHeight,
        getBottomHeadersTotalHeight,
        stickTo,
        scrollToView,
        setListRef,
        scrollBehavior,
        headerBehavior,
        headerCollaspeOpen,
        headerCollaspeClose,
        collapsedPaths,
      }}
    >
      {children}
    </HeadersContext.Provider>
  );
};
