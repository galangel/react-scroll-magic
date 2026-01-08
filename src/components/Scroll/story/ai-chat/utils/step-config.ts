import type { AgentStep, StepConfig } from '../types';

const stepConfigs: Record<AgentStep['type'], StepConfig> = {
  thinking: {
    icon: '🤔',
    title: 'Thinking about your question...',
    bgColor: '#f0f4ff',
  },
  searching: {
    icon: '🔍',
    title: 'Searching for relevant information...',
    bgColor: '#fff4e6',
  },
  analyzing: {
    icon: '📊',
    title: 'Analyzing the results...',
    bgColor: '#e6fff0',
  },
  solution: {
    icon: '✅',
    title: 'Found a solution!',
    bgColor: '#e6ffe6',
  },
};

export const getStepConfig = (type: AgentStep['type']): StepConfig => {
  return stepConfigs[type];
};
