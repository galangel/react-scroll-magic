import { Meta, Story } from '@storybook/react';
import { Scroll } from './Scroll';
import { ScrollHeader } from './ScrollHeader';
import { ScrollItem } from './ScrollItem';

export default {
  title: 'Components/Scroll',
  component: Scroll,
} as Meta;

const BunchOfItems = ({ numberOfItems }: { numberOfItems: number }) => {
  const items = Array.from({ length: numberOfItems }, (_, i) => i);
  return items.map((item) => (
    <ScrollItem key={item} style={{ height: '20px', backgroundColor: '#b0b0b0' }}>
      Content {item}
    </ScrollItem>
  ));
};

const Template: Story = (args) => (
  <Scroll style={{ height: '300px', overflow: 'auto', backgroundColor: 'green' }} {...args}>
    <ScrollHeader style={{ height: '20px', backgroundColor: '#f58383', width: '100%' }}>Header 1</ScrollHeader>
    <BunchOfItems numberOfItems={20} />
    <ScrollHeader style={{ height: '40px', backgroundColor: '#f58383', width: '100%' }}>Header 2</ScrollHeader>
    <BunchOfItems numberOfItems={20} />
    <ScrollHeader style={{ height: '20px', backgroundColor: '#f58383', width: '100%' }}>Header 3</ScrollHeader>
    <BunchOfItems numberOfItems={20} />
    <ScrollHeader style={{ height: '20px', backgroundColor: '#f58383', width: '100%' }}>Header 4</ScrollHeader>
    <BunchOfItems numberOfItems={20} />
  </Scroll>
);

export const Default = Template.bind({});
Default.args = {
  stickTo: 'top',
  scrollBehavior: 'smooth',
};
