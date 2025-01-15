import { Meta, Story } from '@storybook/react';
import { Scroll } from './index';

export default {
  title: 'Components/Scroll',
  component: Scroll,
} as Meta;

const BunchOfItems = ({ numberOfItems }: { numberOfItems: number }) => {
  const items = Array.from({ length: numberOfItems }, (_, i) => i);
  return items.map((item) => (
    <Scroll.Item key={item} style={{ height: '20px', backgroundColor: '#b0b0b0' }}>
      Content {item}
    </Scroll.Item>
  ));
};

const Template: Story = (args) => (
  <Scroll style={{ height: '200px', width: '200px', overflow: 'auto', fontSize: '10px' }} {...args}>
    <Scroll.Header style={{ height: '20px', backgroundColor: '#ce7ba4', width: '100%' }}>Header 1</Scroll.Header>
    <BunchOfItems numberOfItems={20} />
    <Scroll.Header style={{ height: '20px', backgroundColor: '#f58383', width: '100%' }}>Header 2</Scroll.Header>
    <BunchOfItems numberOfItems={20} />
    <Scroll.Header style={{ height: '20px', backgroundColor: '#4378b8', width: '100%' }}>Header 3</Scroll.Header>
    <BunchOfItems numberOfItems={20} />
    <Scroll.Header style={{ height: '20px', backgroundColor: '#61d771', width: '100%' }}>Header 4</Scroll.Header>
    <BunchOfItems numberOfItems={20} />
  </Scroll>
);

export const Default = Template.bind({});
Default.args = {
  stickTo: 'top',
  scrollBehavior: 'smooth',
};
