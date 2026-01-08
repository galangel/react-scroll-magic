import React from 'react';

interface QuestionBubbleProps {
  question: string;
  timestamp: string;
}

export const QuestionBubble: React.FC<QuestionBubbleProps> = ({ question, timestamp }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      padding: '12px 16px',
      backgroundColor: '#1a1a2e',
      borderBottom: '1px solid #2d2d44',
      width: '100%',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: '#4f46e5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        flexShrink: 0,
      }}
    >
      👤
    </div>
    <div style={{ flex: 1 }}>
      <div
        style={{
          fontSize: '14px',
          color: '#fff',
          fontWeight: 500,
          marginBottom: '4px',
        }}
      >
        {question}
      </div>
      <div style={{ fontSize: '11px', color: '#888' }}>{timestamp}</div>
    </div>
  </div>
);
