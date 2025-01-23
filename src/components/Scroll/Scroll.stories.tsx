import { Meta, Preview, StoryObj } from '@storybook/react';
import { Scroll } from './index';
import { Item, Items } from './types';

const preview: Preview = {
  title: 'Components/Scroll',
  component: Scroll,
  parameters: {
    options: { showPanel: true },
    controls: { expanded: true },
  },
  argTypes: {
    headerBehavior: {
      control: { type: 'select' },
      options: ['stick', 'stack', 'push', 'none'],
      description: 'controls the way headers interact with the scroll',
      table: { type: { summary: 'props' }, defaultValue: { summary: 'none' }, category: 'behavior' },
    },
    scrollBehavior: {
      control: { type: 'select' },
      options: ['auto', 'instant', 'smooth'],
      description: 'controls the way headers interact with the scroll',
      table: { type: { summary: 'props' }, defaultValue: { summary: 'none' }, category: 'behavior' },
    },
    stickTo: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'all'],
      description: 'where should the sticky headers stick',
      table: { type: { summary: 'props' }, defaultValue: { summary: 'all' }, category: 'behavior' },
    },
  },
} as Meta;

export default preview;

type Story = StoryObj<typeof Scroll>;
let number = 0;

const Header =
  (key: number): Item['render'] =>
  () => {
    return (
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          height: `20px`,
          padding: '5px',
          backgroundColor: `#${((key * 1234567) & 0xffffff).toString(16).padStart(6, '0')}`,
          width: '100%',
        }}
      >
        Header
      </div>
    );
  };

const item: Item['render'] = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        height: `30px`,
        backgroundColor: `#d4dfea`,
        padding: '5px',
        fontSize: '12px',
        fontFamily: 'monospace',
        width: '100%',
      }}
    >
      Content {number++}
    </div>
  );
};
const createItems = (headerCount: number, itemCount: number, level: number = 1): Items => {
  if (headerCount === 0 || level === 0) {
    return Array.from({ length: itemCount }, () => ({ render: item }));
  }

  return Array.from({ length: headerCount }, () => ({
    render: Header(level),
    nestedItems: createItems(headerCount, itemCount, level - 1),
  }));
};

export const BasicExample: Story = {
  render: (args) => {
    const myitems: Items = [...createItems(1, 7), ...createItems(5, 3), ...createItems(1, 7)];
    return (
      <div style={{ width: '400px', height: '400px' }}>
        <Scroll {...args} items={myitems} />
      </div>
    );
  },
  args: {
    stickTo: 'all',
    scrollBehavior: 'smooth',
    headerBehavior: 'none',
  },
};
export const NestedExample: Story = {
  render: (args) => {
    const myitems: Items = [...createItems(3, 10, 3)];
    return (
      <div style={{ width: '400px', height: '500px' }}>
        <Scroll {...args} items={myitems} />
      </div>
    );
  },
  args: {
    stickTo: 'all',
    scrollBehavior: 'smooth',
    headerBehavior: 'none',
  },
};
