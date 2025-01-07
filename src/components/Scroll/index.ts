import { Scroll as OGScroll } from './Scroll';
import { ScrollHeader } from './ScrollHeader';
import { ScrollItem } from './ScrollItem';

type ScrollType = typeof OGScroll & {
  Header: React.ElementType;
  Item: React.ElementType;
};

Object.defineProperty(OGScroll, 'Header', { value: ScrollHeader });
Object.defineProperty(OGScroll, 'Item', { value: ScrollItem });

export const Scroll = OGScroll as ScrollType;
