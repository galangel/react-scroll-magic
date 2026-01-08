import { useCallback, useEffect, useRef, useState } from 'react';

interface UseAutoScrollOptions {
  threshold?: number;
  scrollIdleDelay?: number;
  hasContent?: boolean;
}

interface UseAutoScrollReturn {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  shouldAutoScroll: () => boolean;
  scrollToBottom: () => void;
  forceAutoScrollOn: () => void;
}

export const useAutoScroll = ({
  threshold = 100,
  scrollIdleDelay = 150,
  hasContent = false,
}: UseAutoScrollOptions = {}): UseAutoScrollReturn => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
  const isUserScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isProgrammaticScrollRef = useRef(false);
  const lastScrollListRef = useRef<HTMLElement | null>(null);

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

    // Mark this as a programmatic scroll so we don't treat it as user scrolling
    isProgrammaticScrollRef.current = true;

    scrollList.scrollTo({
      top: scrollList.scrollHeight,
      behavior: 'smooth',
    });

    // Reset the programmatic flag after the scroll animation completes
    // but don't change isAutoScrollEnabled - only user scrolling should change that
    setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 300);
  }, [getScrollList]);

  const shouldAutoScroll = useCallback((): boolean => {
    return isAutoScrollEnabled && !isUserScrollingRef.current;
  }, [isAutoScrollEnabled]);

  const forceAutoScrollOn = useCallback(() => {
    setIsAutoScrollEnabled(true);
    isUserScrollingRef.current = false;
  }, []);

  // Attach scroll listener - re-run when hasContent changes to ensure we catch the scroll-list
  useEffect(() => {
    const scrollList = getScrollList();
    if (!scrollList) return;

    // Avoid re-attaching to the same element
    if (lastScrollListRef.current === scrollList) return;
    lastScrollListRef.current = scrollList;

    const handleScroll = () => {
      // Ignore programmatic scrolls
      if (isProgrammaticScrollRef.current) {
        return;
      }

      // User is actively scrolling
      isUserScrollingRef.current = true;

      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set a timeout to mark scrolling as stopped
      scrollTimeoutRef.current = setTimeout(() => {
        isUserScrollingRef.current = false;
        // Update auto-scroll status based on position when scrolling stops
        const nearBottom = checkIfNearBottom();
        setIsAutoScrollEnabled(nearBottom);
      }, scrollIdleDelay);
    };

    scrollList.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      scrollList.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      lastScrollListRef.current = null;
    };
  }, [getScrollList, checkIfNearBottom, scrollIdleDelay, hasContent]);

  return {
    scrollContainerRef,
    shouldAutoScroll,
    scrollToBottom,
    forceAutoScrollOn,
  };
};
