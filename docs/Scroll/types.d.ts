export type StickTo = 'top' | 'bottom' | 'all';
export type ScrollContextType = {
    stickTo: StickTo;
    scrollBehavior: ScrollBehavior;
    addHeader: (headerRef: HTMLLIElement) => number;
    getStickedHeadersTotalHeight: (start: number, end: number) => number;
    scrollToView: (header: HTMLLIElement, headerIndex: number) => void;
    setListRef: (listRef: HTMLUListElement) => void;
    headers: HTMLLIElement[];
};
