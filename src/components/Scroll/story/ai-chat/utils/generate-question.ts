import { faker } from '@faker-js/faker';

export const generateQuestion = (): string => {
  const questions = [
    `How do I ${faker.hacker.verb()} the ${faker.hacker.noun()}?`,
    `What's the best way to ${faker.hacker.verb()} ${faker.hacker.adjective()} ${faker.hacker.noun()}?`,
    `Can you help me ${faker.hacker.verb()} a ${faker.hacker.noun()}?`,
    `Why is my ${faker.hacker.noun()} ${faker.hacker.ingverb()}?`,
    `How to implement ${faker.hacker.adjective()} ${faker.hacker.noun()} in React?`,
    `Debug: ${faker.hacker.phrase()}`,
  ];
  return questions[Math.floor(Math.random() * questions.length)];
};
