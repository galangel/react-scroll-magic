import { Scroll as OGScroll } from './Scroll';

type ScrollType = typeof OGScroll & {
    Header: React.ElementType;
    Item: React.ElementType;
};
export declare const Scroll: ScrollType;
export {};
