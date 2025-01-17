import { Scroll as OGScroll } from './Scroll';
import { ScrollHeader } from './ScrollHeader';
import { ScrollItem } from './ScrollItem';

type ScrollType = typeof OGScroll & {
    Header: typeof ScrollHeader;
    Item: typeof ScrollItem;
};
export declare const Scroll: ScrollType;
export {};
