import { useCallback, useRef } from 'react';

interface UseAutoScrollOptions {
  threshold?: number;
}

interface UseAutoScrollReturn {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  shouldAutoScroll: () => boolean;
  scrollToBottom: () => void;
}

export const useAutoScroll = ({ threshold = 100 }: UseAutoScrollOptions = {}): UseAutoScrollReturn => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getScrollList = useCallback((): HTMLElement | null => {
    const container = scrollContainerRef.current;
    if (!container) return null;
    return container.querySelector('.scroll-list') as HTMLElement | null;
  }, []);

  const checkIfNearBottom = useCallback((): boolean => {
    const scrollList = getScrollList();
    if (!scrollList) return true;

    const distanceFromBottom = scrollList.scrollHeight - scrollList.scrollTop - scrollList.clientHeight;
    return distanceFromBottom < threshold;
  }, [getScrollList, threshold]);

  const scrollToBottom = useCallback(() => {
    const scrollList = getScrollList();
    if (!scrollList) return;

    scrollList.scrollTo({
      top: scrollList.scrollHeight,
      behavior: 'smooth',
    });
  }, [getScrollList]);

  const shouldAutoScroll = useCallback((): boolean => {
    return checkIfNearBottom();
  }, [checkIfNearBottom]);

  return {
    scrollContainerRef,
    shouldAutoScroll,
    scrollToBottom,
  };
};
