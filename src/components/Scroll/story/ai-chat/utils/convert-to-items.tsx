import { Items, Item } from '../../../types';
import type { ChatMessage } from '../types';
import { QuestionBubble, AgentStepHeader, ReasoningHeader, SolutionHeader, OutputLineItem } from '../components';

export const convertToItems = (messages: ChatMessage[]): Items => {
  return messages.map((message) => {
    const reasoningSteps = message.steps.filter((step) => step.type !== 'solution');
    const solutionStep = message.steps.find((step) => step.type === 'solution');

    const nestedItems: Item[] = [];

    if (reasoningSteps.length > 0) {
      nestedItems.push({
        id: `${message.id}-reasoning`,
        render: ({ collapse }) => (
          <ReasoningHeader messageId={message.id} messageIsComplete={message.isComplete} collapse={collapse} />
        ),
        nestedItems: reasoningSteps.map((step) => ({
          id: step.id,
          render: ({ collapse }) => <AgentStepHeader step={step} collapse={collapse} />,
          nestedItems: step.outputs.map((output, idx) => ({
            id: output.id,
            render: () => <OutputLineItem text={output.text} isNew={idx === step.outputs.length - 1} indent={3} />,
          })),
        })),
      });
    }

    if (solutionStep) {
      nestedItems.push({
        id: `${message.id}-solution`,
        render: ({ collapse }) => <SolutionHeader collapse={collapse} />,
        nestedItems: solutionStep.outputs.map((output, idx) => ({
          id: output.id,
          render: () => (
            <OutputLineItem text={output.text} isNew={idx === solutionStep.outputs.length - 1} indent={2} />
          ),
        })),
      });
    }

    return {
      id: message.id,
      render: () => <QuestionBubble question={message.question} timestamp={new Date().toLocaleTimeString()} />,
      nestedItems,
    };
  });
};
