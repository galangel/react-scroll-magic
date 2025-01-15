import { cloneDeep } from 'lodash';
import React, { PropsWithChildren, useRef, useState } from 'react';
import type { ScrollContextType, StickTo } from './types';

const HeadersContext = React.createContext<ScrollContextType>({
  addHeader: () => 0,
  getStickedHeadersTotalHeight: () => 0,
  scrollToView: () => {},
  setListRef: () => {},
  stickTo: 'all',
  scrollBehavior: 'smooth',
  headers: [],
});

export const useScrollContext = () => React.useContext(HeadersContext);

interface IHeadersProvider extends PropsWithChildren {
  stickTo?: StickTo;
  scrollBehavior?: ScrollBehavior;
}

export const HeadersProvider: React.FC<IHeadersProvider> = ({
  children,
  stickTo = 'all',
  scrollBehavior = 'smooth',
}) => {
  const [listRef, setListRef] = useState<HTMLUListElement | null>(null);

  const headers = useRef<HTMLLIElement[]>([]);

  const scrollToView = (header: HTMLLIElement, headerIndex: number) => {
    const nextItem = header.nextElementSibling as HTMLLIElement;

    if (listRef && nextItem) {
      listRef.scrollTo({
        top:
          nextItem.offsetTop - getStickedHeadersTotalHeight(0, headerIndex) - nextItem.getBoundingClientRect().height,
        behavior: scrollBehavior,
      });
    }
  };

  const addHeader = (headerRef: HTMLLIElement): number => {
    const headersClone = cloneDeep(headers.current);
    headersClone.push(headerRef);
    headers.current = headersClone;

    return headersClone.length - 1;
  };

  const getStickedHeadersTotalHeight = (start: number, end: number) => {
    const range = headers.current.slice(start, end);

    const size = range.reduce((acc, header) => {
      const size = acc + header?.getBoundingClientRect?.().height || 0;

      return size;
    }, 0);

    return size;
  };

  return (
    <HeadersContext.Provider
      value={{
        addHeader,
        getStickedHeadersTotalHeight,
        stickTo,
        scrollToView,
        setListRef,
        scrollBehavior,
        headers: headers.current,
      }}
    >
      {children}
    </HeadersContext.Provider>
  );
};
