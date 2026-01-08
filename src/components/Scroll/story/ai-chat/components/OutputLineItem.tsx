import React from 'react';

interface OutputLineItemProps {
  text: string;
  isNew?: boolean;
  indent?: number; // Nesting level (1, 2, 3, etc.)
}

export const OutputLineItem: React.FC<OutputLineItemProps> = ({ text, isNew, indent = 2 }) => {
  // Base padding is 16px, each indent level adds 24px
  const leftPadding = 16 + indent * 24;

  return (
    <div
      style={{
        padding: `8px 16px 8px ${leftPadding}px`,
        fontSize: '12px',
        color: '#a0aec0',
        fontFamily: 'monospace',
        backgroundColor: isNew ? '#1e2a4a' : '#0f172a',
        borderBottom: '1px solid #1e293b',
        transition: 'background-color 0.3s',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <span style={{ color: '#4f46e5', marginRight: '8px' }}>›</span>
      {text}
    </div>
  );
};
