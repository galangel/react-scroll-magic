import { Meta, Story } from '@storybook/react';
import { Scroll } from './index';

export default {
  title: 'Components/Scroll',
  component: Scroll,
} as Meta;

const BunchOfItems = ({ numberOfItems, backgroundColor }: { numberOfItems: number; backgroundColor: string }) => {
  const items = Array.from({ length: numberOfItems }, (_, i) => i);
  return items.map((item) => (
    <Scroll.Item
      key={item}
      style={{
        backgroundColor: `#889098`,
        padding: '2px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          height: '30px',
          backgroundColor: `#a5b0bb`,
          padding: '5px',
          fontSize: '12px',
          fontFamily: 'monospace',
          width: '100%',
        }}
      >
        Content {item}
      </div>
    </Scroll.Item>
  ));
};
const HeaderAndItems = ({ index = 0 }) => {
  const backgroundColor = `hsl(${(index * 40) % 360}, 70%, 95%)`;
  return (
    <>
      <Scroll.Header
        style={{
          padding: '5px',
          backgroundColor: `hsl(${(index * 40) % 360}, 70%, 80%)`,
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            height: '20px',
            padding: '5px',
            backgroundColor,
            borderRadius: '8px',
            width: '100%',
          }}
        >
          Header {index}
        </div>
      </Scroll.Header>
      <BunchOfItems numberOfItems={20} backgroundColor={backgroundColor} />
    </>
  );
};

const Template: Story = (args) => {
  return (
    <Scroll style={{ height: '300px', width: '300px', overflow: 'auto' }} {...args}>
      {Array.from({ length: 5 }, (_, i) => i).map((index) => (
        <HeaderAndItems key={index} index={index} />
      ))}
    </Scroll>
  );
};

export const Default = Template.bind({});
Default.args = {
  stickTo: 'all',
  scrollBehavior: 'smooth',
};
