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

export const ScrollToId: Story = {
  render: (args) => {
    const options: string[] = [];
    const createItems = (headerCount: number, itemCount: number, group: number, level: number = 1): Items => {
      if (headerCount === 0 || level === 0) {
        return Array.from({ length: itemCount }, (_, index) => {
          const id = `content-${group}-${level}-${index + 1}`;
          options.push(id);
          return { render: storyUtils.itemRender, id };
        });
      }

      return Array.from({ length: headerCount }, () => ({
        render: storyUtils.headerRender(level),
        nestedItems: createItems(headerCount, itemCount, group, level - 1),
      }));
    };
    const myitems: Items = [
      ...createItems(1, 12, 1),
      ...createItems(1, 12, 2),
      ...createItems(1, 12, 3),
      ...createItems(1, 12, 4),
    ];
    return (
      <div>
        <select onChange={(e) => document.getElementById(e.target.value)?.scrollIntoView()}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div style={{ width: '400px', height: '500px' }}>
          <Scroll {...args} items={myitems} />
        </div>
      </div>
    );
  },
  args: {
    stickTo: 'all',
    scrollBehavior: 'smooth',
    headerBehavior: 'push',
  },
};
