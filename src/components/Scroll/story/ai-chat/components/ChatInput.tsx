import React from 'react';

interface ChatInputProps {
  isGenerating: boolean;
  onGenerate: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ isGenerating, onGenerate }) => (
  <div
    style={{
      padding: '16px 20px',
      backgroundColor: '#1e293b',
      borderTop: '1px solid #334155',
      display: 'flex',
      gap: '12px',
    }}
  >
    <button
      onClick={onGenerate}
      disabled={isGenerating}
      style={{
        flex: 1,
        padding: '12px 20px',
        backgroundColor: isGenerating ? '#334155' : '#4f46e5',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 500,
        cursor: isGenerating ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
    >
      {isGenerating ? (
        <>
          <span
            style={{
              display: 'inline-block',
              animation: 'spin 1s linear infinite',
            }}
          >
            ⏳
          </span>
          Generating...
        </>
      ) : (
        <>
          <span>✨</span>
          Generate Random Question
        </>
      )}
    </button>
  </div>
);
