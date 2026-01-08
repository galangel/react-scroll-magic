import React, { useEffect } from 'react';

// Track which message IDs have already had their reasoning auto-collapsed
const collapsedReasoningIds = new Set<string>();

interface ReasoningHeaderProps {
  messageId: string;
  messageIsComplete?: boolean;
  collapse?: {
    isOpen: boolean;
    open: () => void;
    close: () => void;
  };
}

export const ReasoningHeader: React.FC<ReasoningHeaderProps> = ({ messageId, messageIsComplete, collapse }) => {
  const { isOpen, open, close } = collapse ?? {};

  // Auto-collapse reasoning when the message becomes complete
  useEffect(() => {
    if (messageIsComplete && !collapsedReasoningIds.has(messageId) && collapse?.isOpen) {
      collapsedReasoningIds.add(messageId);
      collapse.close();
    }
  }, [messageIsComplete, messageId, collapse]);

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
        backgroundColor: '#1a2744',
        borderBottom: '1px solid #2d2d44',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <span style={{ fontSize: '16px' }}>🧠</span>
      <span
        style={{
          fontSize: '14px',
          color: '#a8b9cc',
          flex: 1,
          fontWeight: 500,
        }}
      >
        Reasoning
      </span>
      {!messageIsComplete && (
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#4f46e5',
            animation: 'pulse 1.5s infinite',
          }}
        />
      )}
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
            border: '1px solid #3d4f6f',
            backgroundColor: isOpen ? '#1e3a5f' : '#2d3f5f',
            color: '#8899a6',
            cursor: 'pointer',
            transition: 'all 0.2s',
            padding: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2a4a6f';
            e.currentTarget.style.borderColor = '#4f6f8f';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = isOpen ? '#1e3a5f' : '#2d3f5f';
            e.currentTarget.style.borderColor = '#3d4f6f';
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
