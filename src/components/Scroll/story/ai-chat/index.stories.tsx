import { Meta, Preview, StoryObj } from '@storybook/react';
import { Scroll } from '../../index';
import { AIChatDemo } from './AIChatDemo';
import { DocumentationPanel } from './components';

const preview: Preview = {
  title: 'Examples/AI Chat',
  component: Scroll,
  parameters: {
    layout: 'fullscreen',
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
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px',
        boxSizing: 'border-box',
      }}
    >
      <AIChatDemo />
      <DocumentationPanel />
    </div>
  ),
};
