import { default as React } from 'react';
import { StickTo } from './types';

interface IScrollProps extends React.PropsWithChildren<React.LiHTMLAttributes<HTMLUListElement>> {
    stickTo?: StickTo;
    scrollBehavior?: ScrollBehavior;
}
export declare const Scroll: React.FC<IScrollProps>;
export {};
