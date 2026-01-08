import React from 'react';
import type { AgentStep } from '../types';
import { getStepConfig } from '../utils';

interface AgentStepHeaderProps {
  step: AgentStep;
  collapse?: {
    isOpen: boolean;
    open: () => void;
    close: () => void;
  };
}

export const AgentStepHeader: React.FC<AgentStepHeaderProps> = ({ step, collapse }) => {
  const config = getStepConfig(step.type);
  const { isOpen, open, close } = collapse ?? {};

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 16px 10px 48px',
        backgroundColor: '#16213e',
        borderBottom: '1px solid #2d2d44',
        cursor: collapse ? 'pointer' : 'default',
        width: '100%',
        boxSizing: 'border-box',
      }}
      onClick={() => (isOpen ? close?.() : open?.())}
    >
      <span style={{ fontSize: '16px' }}>{config.icon}</span>
      <span
        style={{
          fontSize: '13px',
          color: '#b8c5d6',
          flex: 1,
        }}
      >
        {step.title}
      </span>
      {!step.isComplete && (
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
        <span
          style={{
            fontSize: '10px',
            color: '#666',
            transition: 'transform 0.2s',
            transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
          }}
        >
          ▼
        </span>
      )}
    </div>
  );
};
