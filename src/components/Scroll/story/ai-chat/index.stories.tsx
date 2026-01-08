import { Meta, Preview, StoryObj } from '@storybook/react';
import { Scroll } from '../../index';
import { AIChatDemo } from './AIChatDemo';

const preview: Preview = {
  title: 'Examples/AI Chat',
  component: Scroll,
  parameters: {
    options: { showPanel: false },
    controls: { expanded: false },
  },
} as Meta;

export default preview;

type Story = StoryObj<typeof Scroll>;

export const AIChat: Story = {
  render: () => (
    <div
      style={{
        padding: '40px',
        backgroundColor: '#0a0a0f',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AIChatDemo />
    </div>
  ),
};
