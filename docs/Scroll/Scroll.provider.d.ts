import { default as React, PropsWithChildren } from 'react';
import { ScrollContextType, StickTo } from './types';

export declare const useScrollContext: () => ScrollContextType;
interface IHeadersProvider extends PropsWithChildren {
    stickTo?: StickTo;
    scrollBehavior?: ScrollBehavior;
}
export declare const HeadersProvider: React.FC<IHeadersProvider>;
export {};
