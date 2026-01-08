import React from 'react';

interface SolutionHeaderProps {
  collapse?: {
    isOpen: boolean;
    open: () => void;
    close: () => void;
  };
}

export const SolutionHeader: React.FC<SolutionHeaderProps> = ({ collapse }) => {
  const { isOpen, open, close } = collapse ?? {};

  const handleCollapseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOpen) {
      close?.();
    } else {
      open?.();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 16px 10px 32px',
        backgroundColor: '#1a3a2a',
        borderBottom: '1px solid #2d4d3d',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <span style={{ fontSize: '16px' }}>✨</span>
      <span
        style={{
          fontSize: '14px',
          color: '#a8ccb9',
          flex: 1,
          fontWeight: 500,
        }}
      >
        Solution
      </span>
      {collapse && (
        <button
          onClick={handleCollapseClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            borderRadius: '4px',
            border: '1px solid #3d6f4f',
            backgroundColor: isOpen ? '#1e5f3a' : '#2d5f3f',
            color: '#8aa696',
            cursor: 'pointer',
            transition: 'all 0.2s',
            padding: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2a6f4a';
            e.currentTarget.style.borderColor = '#4f8f6f';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = isOpen ? '#1e5f3a' : '#2d5f3f';
            e.currentTarget.style.borderColor = '#3d6f4f';
          }}
          aria-label={isOpen ? 'Collapse' : 'Expand'}
          title={isOpen ? 'Collapse' : 'Expand'}
        >
          <span
            style={{
              fontSize: '10px',
              transition: 'transform 0.2s',
              transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
            }}
          >
            ▼
          </span>
        </button>
      )}
    </div>
  );
};
