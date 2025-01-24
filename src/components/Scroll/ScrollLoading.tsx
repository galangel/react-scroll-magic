import React from 'react';

interface IScrollLoadingProps {
  loading: boolean;
}

export const ScrollLoading: React.FC<IScrollLoadingProps> = ({ loading }) => {
  if (!loading) return null;

  return <li role="listitem" aria-label="Scroll Loading" className={`scroll-loading ${loading ? 'loading' : ''}`}></li>;
};
