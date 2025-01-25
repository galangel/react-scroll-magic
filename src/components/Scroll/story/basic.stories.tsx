import { Meta, Preview, StoryObj } from '@storybook/react';
import { Scroll } from '../index';
import { Items } from '../types';
import { storyUtils } from './util';

const preview: Preview = {
  title: 'Components/Scroll',
  component: Scroll,
  parameters: {
    options: { showPanel: true },
    controls: { expanded: true },
  },
  argTypes: storyUtils.argTypes,
} as Meta;

export default preview;

type Story = StoryObj<typeof Scroll>;

export const Basic: Story = {
  render: (args) => {
    const createItems = (headerCount: number, itemCount: number, level: number = 1): Items => {
      if (headerCount === 0 || level === 0) {
        return Array.from({ length: itemCount }, () => ({ render: storyUtils.itemRender }));
      }

      return Array.from({ length: headerCount }, () => ({
        render: storyUtils.headerRender(1),
        nestedItems: createItems(headerCount, itemCount, level - 1),
      }));
    };
    const myitems: Items = [...createItems(1, 20), ...createItems(1, 20), ...createItems(1, 20)];
    return (
      <div style={{ width: '400px', height: '500px' }}>
        <Scroll {...args} items={myitems} />
      </div>
    );
  },
  args: {
    stickTo: 'all',
    scrollBehavior: 'smooth',
    headerBehavior: 'stick',
  },
};
