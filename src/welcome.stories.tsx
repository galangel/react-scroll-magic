import React, { CSSProperties } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Scroll } from './components';
import { Item, Items } from './components/Scroll/types';

const headerRender =
  (title: string, style: CSSProperties = {}, showCollapse: boolean = false): Item['render'] =>
  ({ collapse }) => {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '5px',
          padding: '20px',
          backgroundColor: 'white',
          fontSize: '20px',
          height: '30px',
          ...style,
        }}
      >
        {title}
        {showCollapse && (
          <button
            style={{
              padding: '5px 10px',
              backgroundColor: '#9aa2ab',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={collapse?.isOpen ? collapse.close : collapse?.open}
          >
            {!collapse?.isOpen ? 'Expand' : 'Collapse'}
          </button>
        )}
      </div>
    );
  };

const itemRender =
  (text: string, style: CSSProperties = {}): Item['render'] =>
  () => {
    return (
      <span
        style={{
          padding: '20px',
          width: '100%',
          backgroundColor: 'white',
          ...style,
        }}
      >
        {text}
      </span>
    );
  };
const codeRender =
  (code: string, style: CSSProperties = {}): Item['render'] =>
  () => {
    return (
      <pre
        style={{
          padding: '20px',
          margin: '0 auto',
          width: '80%',
          backgroundColor: '#f5f5f5',
          borderRadius: '5px',
          overflowX: 'auto',
          ...style,
        }}
      >
        <code
          style={{
            fontFamily: 'monospace',
          }}
        >
          {code}
        </code>
      </pre>
    );
  };
const WelcomePage: React.FC = () => {
  const items: Items = [
    {
      render: headerRender('Welcome to React Scroll Magic', { fontSize: '30px' }),
      nestedItems: [
        {
          render:
            itemRender(` This Storybook showcases the React Scroll Magic component, which allows you to create magical scroll
      interactions in your React applications. Explore the stories to see various examples and learn how to use the
      component effectively.`),
        },
      ],
    },
    {
      render: headerRender('Usage Instructions'),
      nestedItems: [
        {
          render: headerRender('1. Install the Scroll Component using npm or yarn:'),
          nestedItems: [
            {
              render: codeRender('npm install react-scroll-magic', { fontFamily: 'monospace' }),
            },
            {
              render: itemRender('or', { textAlign: 'center' }),
            },
            {
              render: codeRender('yarn add react-scroll-magic', { fontFamily: 'monospace' }),
            },
          ],
        },
        {
          render: headerRender('2. Import the Scroll Component in your React application:'),
          nestedItems: [
            {
              render: codeRender('import { Scroll } from "react-scroll-magic";', {
                fontFamily: 'monospace',
              }),
            },
          ],
        },
        {
          render: headerRender('3. Use the Scroll Component in your JSX:'),
          nestedItems: [
            {
              render: codeRender(
                'const items = [\n' +
                  '  { render: () => <div>Item 1</div> },\n' +
                  '  { render: () => <div>Item 2</div> },\n' +
                  '];\n\n' +
                  '<Scroll items={items} />\n',
                { fontFamily: 'monospace' },
              ),
            },
          ],
        },
        {
          render: headerRender('4. Customize the Scroll Component using props:'),
          nestedItems: [
            {
              render: codeRender(
                '<Scroll\n' +
                  '  items={items}\n' +
                  '  stickTo="top"\n' +
                  '  scrollBehavior="smooth"\n' +
                  '  headerBehavior="stick"\n' +
                  '/>',
                { fontFamily: 'monospace' },
              ),
            },
          ],
        },
      ],
    },
    {
      render: headerRender('Loading More Items'),
      nestedItems: [
        {
          render: headerRender('The Scroll component supports infinite scrolling by using the `loading` prop.'),
          nestedItems: [
            {
              render: headerRender('1. Define a state to keep track of the items and loading status:'),
              nestedItems: [
                {
                  render: codeRender(
                    'const [items, setItems] = useState(initialItems);\n' +
                      'const [isLoading, setIsLoading] = useState(false);\n',
                    { fontFamily: 'monospace' },
                  ),
                },
              ],
            },
            {
              render: headerRender('2. Create a function to load more items:'),
              nestedItems: [
                {
                  render: codeRender(
                    'const loadMoreItems = async () => {\n' +
                      '  setIsLoading(true);\n' +
                      '  const newItems = await fetchMoreItems();\n' +
                      '  setItems((prevItems) => [...prevItems, ...newItems]);\n' +
                      '  setIsLoading(false);\n' +
                      '};',
                    { fontFamily: 'monospace' },
                  ),
                },
              ],
            },
            {
              render: headerRender('3. Pass the `loading` prop to the Scroll component:'),
              nestedItems: [
                {
                  render: codeRender(
                    '<Scroll\n' +
                      '  items={items}\n' +
                      '  loading={{\n' +
                      '    onBottomReached: loadMoreItems,\n' +
                      '    render: (isLoading) => isLoading ? <div>Loading...</div> : <div>End of list</div>,\n' +
                      '  }}\n' +
                      '/>',
                    { fontFamily: 'monospace' },
                  ),
                },
                {
                  render: itemRender(
                    'The `onBottomReached` function is called when the user scrolls to the bottom of the list.',
                  ),
                },
                {
                  render: itemRender(
                    'The optional `render` function displays a loading indicator while new items are being fetched.',
                  ),
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', height: '800px', overflow: 'hidden' }}>
      <Scroll items={items} headerBehavior="push" />
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
