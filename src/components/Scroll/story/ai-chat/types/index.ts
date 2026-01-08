export interface OutputLine {
  id: string;
  text: string;
}

export interface AgentStep {
  id: string;
  type: 'thinking' | 'searching' | 'analyzing' | 'solution';
  title: string;
  outputs: OutputLine[];
  isComplete: boolean;
}

export interface ChatMessage {
  id: string;
  question: string;
  steps: AgentStep[];
  isComplete: boolean;
}

export interface StepConfig {
  icon: string;
  title: string;
  bgColor: string;
}
