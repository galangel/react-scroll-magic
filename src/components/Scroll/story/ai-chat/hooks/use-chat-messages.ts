import { useState, useCallback, useRef, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import type { ChatMessage, AgentStep } from '../types';
import { generateQuestion, generateOutputLine, getStepConfig } from '../utils';

interface UseChatMessagesReturn {
  messages: ChatMessage[];
  isGenerating: boolean;
  generateResponse: () => void;
}

export const useChatMessages = (): UseChatMessagesReturn => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, []);

  const addDelayedAction = useCallback((action: () => void, delay: number) => {
    const timeout = setTimeout(action, delay);
    timeoutRefs.current.push(timeout);
    return timeout;
  }, []);

  const generateResponse = useCallback(() => {
    if (isGenerating) return;
    setIsGenerating(true);

    const messageId = faker.string.uuid();
    const question = generateQuestion();

    // Add the question first
    const newMessage: ChatMessage = {
      id: messageId,
      question,
      timestamp: new Date().toLocaleTimeString(),
      steps: [],
      isComplete: false,
    };

    setMessages((prev) => [...prev, newMessage]);

    // Define the steps to simulate
    const stepTypes: AgentStep['type'][] = ['thinking', 'searching', 'analyzing', 'solution'];

    let totalDelay = 500;

    for (const stepType of stepTypes) {
      const stepId = faker.string.uuid();
      const outputCount = stepType === 'solution' ? 1 : faker.number.int({ min: 2, max: 5 });

      // Add the step header
      addDelayedAction(() => {
        const config = getStepConfig(stepType);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId
              ? {
                  ...msg,
                  steps: [
                    ...msg.steps,
                    {
                      id: stepId,
                      type: stepType,
                      title: config.title,
                      outputs: [],
                      isComplete: false,
                    },
                  ],
                }
              : msg,
          ),
        );
      }, totalDelay);

      totalDelay += faker.number.int({ min: 300, max: 600 });

      // Add output lines one by one
      for (let i = 0; i < outputCount; i++) {
        const outputText = generateOutputLine(stepType);
        const outputId = faker.string.uuid();

        addDelayedAction(() => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === messageId
                ? {
                    ...msg,
                    steps: msg.steps.map((step) =>
                      step.id === stepId
                        ? {
                            ...step,
                            outputs: [...step.outputs, { id: outputId, text: outputText }],
                          }
                        : step,
                    ),
                  }
                : msg,
            ),
          );
        }, totalDelay);

        totalDelay += faker.number.int({ min: 100, max: 300 });
      }

      // Mark step as complete
      addDelayedAction(() => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId
              ? {
                  ...msg,
                  steps: msg.steps.map((step) => (step.id === stepId ? { ...step, isComplete: true } : step)),
                }
              : msg,
          ),
        );
      }, totalDelay);

      totalDelay += faker.number.int({ min: 200, max: 400 });
    }

    // Mark message as complete
    addDelayedAction(() => {
      setMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, isComplete: true } : msg)));
      setIsGenerating(false);
    }, totalDelay);
  }, [isGenerating, addDelayedAction]);

  return {
    messages,
    isGenerating,
    generateResponse,
  };
};
