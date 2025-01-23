export type StickTo = 'top' | 'bottom' | 'all';

export type HeaderBehavior = 'stick' | 'push' | 'stack' | 'none';

export type ScrollContextType = {
  stickTo: StickTo;
  scrollBehavior: ScrollBehavior;
  addHeader: (headerRef: HTMLLIElement) => number;
  getStickedHeadersTotalHeight: (start: number, end: number) => number;
  scrollToView: (header: HTMLLIElement, headerIndex: number) => void;
  setListRef: (listRef: HTMLUListElement) => void;
  headers: HTMLLIElement[];
  headerBehavior: HeaderBehavior;
};

export type Item = {
  id?: string;
  render: () => JSX.Element;
  nestedItems?: Item[];
};

export type Items = Item[];
