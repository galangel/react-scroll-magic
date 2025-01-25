import { Meta, Preview, StoryObj } from '@storybook/react';
import { Scroll } from '../index';
import { Items } from '../types';
import { storyUtils } from './util';
import { useState } from 'react';

const preview: Preview = {
  title: 'Components/Scroll/Infinite',
  component: Scroll,
  parameters: {
    options: { showPanel: true },
    controls: { expanded: true },
  },
  argTypes: storyUtils.argTypes,
} as Meta;

export default preview;

type Story = StoryObj<typeof Scroll>;

export const InfiniteDefault: Story = {
  render: (args) => {
    const [updatesLeft, setUpdatesLeft] = useState(5);
    const createItems = (headerCount: number, itemCount: number, level: number = 1): Items => {
      if (headerCount === 0 || level === 0) {
        return Array.from({ length: itemCount }, () => ({ render: storyUtils.itemRender }));
      }

      return Array.from({ length: headerCount }, () => ({
        render: storyUtils.headerRender(level),
        nestedItems: createItems(headerCount, itemCount, level - 1),
      }));
    };
    const [myitems, setMyItems] = useState<Items>([...createItems(1, 20)]);

    const handleBottomReached = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setUpdatesLeft((prev) => prev - 1);
      setMyItems((prev) => [...prev, ...createItems(1, 20)]);
    };

    const loading = {
      onBottomReached: updatesLeft > 0 ? handleBottomReached : undefined,
      // render: (isLoading: boolean) => <div>{isLoading ? 'Please wait!' : 'End of the list'}</div>,
    };

    return (
      <div style={{ width: '400px', height: '400px' }}>
        <Scroll {...args} items={myitems} loading={loading} />
      </div>
    );
  },
  args: {
    stickTo: 'all',
    scrollBehavior: 'smooth',
    headerBehavior: 'none',
  },
};

export const InfiniteCustomRender: Story = {
  render: (args) => {
    const [updatesLeft, setUpdatesLeft] = useState(5);
    const createItems = (headerCount: number, itemCount: number, level: number = 1): Items => {
      if (headerCount === 0 || level === 0) {
        return Array.from({ length: itemCount }, () => ({ render: storyUtils.itemRender }));
      }

      return Array.from({ length: headerCount }, () => ({
        render: storyUtils.headerRender(level),
        nestedItems: createItems(headerCount, itemCount, level - 1),
      }));
    };
    const [myitems, setMyItems] = useState<Items>([...createItems(1, 20)]);

    const handleBottomReached = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setUpdatesLeft((prev) => prev - 1);
      setMyItems((prev) => [...prev, ...createItems(1, 20)]);
    };

    const loading = {
      onBottomReached: updatesLeft > 0 ? handleBottomReached : undefined,
      render: (isLoading: boolean) => (
        <div style={{ textAlign: 'center', padding: '10px' }}>
          {isLoading ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="spinner" style={{ marginRight: '10px' }}></div>
              <span>Loading more items...</span>
            </div>
          ) : (
            <span>End of the list</span>
          )}
        </div>
      ),
    };

    return (
      <div style={{ width: '400px', height: '400px' }}>
        <Scroll {...args} items={myitems} loading={loading} />
      </div>
    );
  },
  args: {
    stickTo: 'all',
    scrollBehavior: 'smooth',
    headerBehavior: 'none',
  },
};
