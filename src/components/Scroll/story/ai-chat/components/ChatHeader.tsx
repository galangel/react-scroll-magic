import React from 'react';

interface ChatHeaderProps {
  isGenerating: boolean;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ isGenerating }) => (
  <div
    style={{
      padding: '16px 20px',
      backgroundColor: '#1e293b',
      borderBottom: '1px solid #334155',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    }}
  >
    <div
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
      }}
    >
      🤖
    </div>
    <div>
      <div style={{ color: '#fff', fontWeight: 600, fontSize: '15px' }}>AI Assistant</div>
      <div style={{ color: '#64748b', fontSize: '12px' }}>{isGenerating ? '● Generating response...' : '● Online'}</div>
    </div>
  </div>
);
