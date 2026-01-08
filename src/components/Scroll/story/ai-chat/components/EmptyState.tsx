import React from 'react';

export const EmptyState: React.FC = () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#64748b',
      gap: '16px',
    }}
  >
    <div style={{ fontSize: '48px' }}>💬</div>
    <div style={{ fontSize: '14px' }}>Click the button below to ask a question</div>
  </div>
);
