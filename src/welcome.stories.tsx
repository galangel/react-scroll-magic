import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const WelcomePage: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333' }}>Welcome to React Scroll Magic</h1>
      <p style={{ color: '#666', fontSize: '18px' }}>
        This Storybook showcases the React Scroll Magic component, which allows you to create magical scroll
        interactions in your React applications. Explore the stories to see various examples and learn how to use the
        component effectively.
      </p>
    </div>
  );
};

type Story = StoryObj<typeof WelcomePage>;

export default {
  title: 'Welcome',
  component: WelcomePage,
  parameters: {
    options: { showPanel: false },
    controls: { hideNoControlsWarning: true, disable: true },
    actions: { disable: true },
    toolbar: { hidden: true },
  },
} as Meta;

export const Welcome: Story = {
  render: () => <WelcomePage />,
};
