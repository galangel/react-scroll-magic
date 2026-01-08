import React from 'react';

interface OutputLineItemProps {
  text: string;
  isNew?: boolean;
}

export const OutputLineItem: React.FC<OutputLineItemProps> = ({ text, isNew }) => (
  <div
    style={{
      padding: '8px 16px 8px 72px',
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
