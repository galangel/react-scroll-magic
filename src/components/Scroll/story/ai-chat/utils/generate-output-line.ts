import { faker } from '@faker-js/faker';
import type { AgentStep } from '../types';

export const generateOutputLine = (stepType: AgentStep['type']): string => {
  switch (stepType) {
    case 'thinking':
      return faker.hacker.phrase();
    case 'searching':
      return `Found: ${faker.system.filePath()} - ${faker.lorem.sentence()}`;
    case 'analyzing':
      return `[${faker.number.int({ min: 1, max: 100 })}%] ${faker.lorem.sentence()}`;
    case 'solution':
      return faker.lorem.paragraph();
    default:
      return faker.lorem.sentence();
  }
};
