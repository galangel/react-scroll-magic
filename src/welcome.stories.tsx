import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Scroll } from './components';
import { Item, Items } from './components/Scroll/types';

// ============================================================================
// Helper Functions for Creating Render Functions
// ============================================================================

const createSectionHeader =
  (title: string, icon: string, color: string): Item['render'] =>
  ({ collapse }) => (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px 20px',
        backgroundColor: color,
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <span style={{ fontSize: '24px' }}>{icon}</span>
      <span style={{ fontSize: '20px', fontWeight: 600, color: '#fff', flex: 1 }}>{title}</span>
      {collapse && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            collapse.isOpen ? collapse.close() : collapse.open();
          }}
          style={{
            padding: '6px 12px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '12px',
            transition: 'background-color 0.2s',
          }}
        >
          {collapse.isOpen ? '▼ Collapse' : '▶ Expand'}
        </button>
      )}
    </div>
  );

const createSubHeader =
  (title: string, icon?: string): Item['render'] =>
  ({ collapse }) => (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 20px 12px 40px',
        backgroundColor: '#2d3748',
        borderBottom: '1px solid #4a5568',
      }}
    >
      {icon && <span style={{ fontSize: '16px' }}>{icon}</span>}
      <span style={{ fontSize: '16px', fontWeight: 500, color: '#e2e8f0', flex: 1 }}>{title}</span>
      {collapse && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            collapse.isOpen ? collapse.close() : collapse.open();
          }}
          style={{
            padding: '4px 10px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            color: '#a0aec0',
            border: '1px solid #4a5568',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '11px',
          }}
        >
          {collapse.isOpen ? '−' : '+'}
        </button>
      )}
    </div>
  );

const createTextBlock =
  (text: string): Item['render'] =>
  () => (
    <div
      style={{
        width: '100%',
        padding: '16px 20px 16px 40px',
        backgroundColor: '#1a202c',
        color: '#cbd5e0',
        fontSize: '14px',
        lineHeight: 1.6,
      }}
    >
      {text}
    </div>
  );

const createCodeBlock =
  (code: string): Item['render'] =>
  () => (
    <div style={{ width: '100%', padding: '12px 20px 12px 40px', backgroundColor: '#1a202c' }}>
      <pre
        style={{
          margin: 0,
          padding: '16px',
          backgroundColor: '#0d1117',
          borderRadius: '8px',
          border: '1px solid #30363d',
          overflowX: 'auto',
        }}
      >
        <code
          style={{
            fontFamily: '"Fira Code", "Monaco", monospace',
            fontSize: '13px',
            color: '#e6edf3',
            lineHeight: 1.5,
          }}
        >
          {code}
        </code>
      </pre>
    </div>
  );

const createFeatureCard =
  (icon: string, title: string, description: string): Item['render'] =>
  () => (
    <div
      style={{
        width: '100%',
        padding: '16px 20px 16px 60px',
        backgroundColor: '#1a202c',
        borderBottom: '1px solid #2d3748',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <span style={{ fontSize: '24px' }}>{icon}</span>
        <div>
          <div style={{ color: '#f7fafc', fontWeight: 600, fontSize: '15px', marginBottom: '4px' }}>{title}</div>
          <div style={{ color: '#a0aec0', fontSize: '13px', lineHeight: 1.5 }}>{description}</div>
        </div>
      </div>
    </div>
  );

const createPropRow =
  (prop: string, type: string, description: string): Item['render'] =>
  () => (
    <div
      style={{
        width: '100%',
        padding: '12px 20px 12px 60px',
        backgroundColor: '#1a202c',
        borderBottom: '1px solid #2d3748',
        display: 'grid',
        gridTemplateColumns: '120px 100px 1fr',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <code style={{ color: '#63b3ed', fontSize: '13px', fontFamily: 'monospace' }}>{prop}</code>
      <code style={{ color: '#68d391', fontSize: '12px', fontFamily: 'monospace' }}>{type}</code>
      <span style={{ color: '#a0aec0', fontSize: '13px' }}>{description}</span>
    </div>
  );

// ============================================================================
// Welcome Page Component
// ============================================================================

const WelcomePage: React.FC = () => {
  const items: Items = [
    // Hero Section
    {
      render: () => (
        <div
          style={{
            width: '100%',
            padding: '40px 20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🪄</div>
          <h1 style={{ color: '#fff', fontSize: '32px', margin: '0 0 12px 0', fontWeight: 700 }}>React Scroll Magic</h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '16px',
              margin: 0,
              maxWidth: '500px',
              marginInline: 'auto',
            }}
          >
            Create magical scroll experiences with nested sticky headers, collapsible sections, and smooth animations.
          </p>
        </div>
      ),
      nestedItems: [
        {
          render: () => (
            <div
              style={{
                width: '100%',
                padding: '20px',
                backgroundColor: '#2d3748',
                display: 'flex',
                justifyContent: 'center',
                gap: '12px',
                flexWrap: 'wrap',
              }}
            >
              {['📌 Sticky Headers', '🎯 Nested Scrolling', '📦 Collapsible Sections', '♾️ Infinite Loading'].map(
                (badge) => (
                  <span
                    key={badge}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#4a5568',
                      color: '#e2e8f0',
                      borderRadius: '20px',
                      fontSize: '13px',
                    }}
                  >
                    {badge}
                  </span>
                ),
              )}
            </div>
          ),
        },
      ],
    },

    // Key Features
    {
      render: createSectionHeader('Key Features', '✨', '#4f46e5'),
      nestedItems: [
        {
          render: createFeatureCard(
            '📌',
            'Sticky Headers',
            'Headers stick to the top as you scroll, with support for nested sticky behavior. Choose between "stick" (traditional) or "push" (headers push each other) modes.',
          ),
        },
        {
          render: createFeatureCard(
            '🎯',
            'Nested Structure',
            'Create deeply nested hierarchies with items inside items. Perfect for tree views, documentation, chat interfaces, and more.',
          ),
        },
        {
          render: createFeatureCard(
            '📦',
            'Collapse/Expand',
            'Each section with nested content can be collapsed or expanded. The component provides open/close controls through render props.',
          ),
        },
        {
          render: createFeatureCard(
            '♾️',
            'Infinite Scrolling',
            'Built-in support for loading more items when reaching the bottom. Great for feeds, lists, and paginated content.',
          ),
        },
        {
          render: createFeatureCard(
            '🎨',
            'Fully Customizable',
            'Bring your own components! The Scroll component uses render props, giving you complete control over the look and feel.',
          ),
        },
      ],
    },

    // Quick Start
    {
      render: createSectionHeader('Quick Start', '🚀', '#059669'),
      nestedItems: [
        {
          render: createSubHeader('Installation', '📦'),
          nestedItems: [
            {
              render: createCodeBlock(`npm install @galangel/react-scroll-magic

# or with yarn
yarn add @galangel/react-scroll-magic`),
            },
          ],
        },
        {
          render: createSubHeader('Basic Usage', '💻'),
          nestedItems: [
            {
              render: createCodeBlock(`import { Scroll } from "@galangel/react-scroll-magic";

const items = [
  {
    id: "section-1",
    render: () => <Header>Section 1</Header>,
    nestedItems: [
      { render: () => <Item>Content 1</Item> },
      { render: () => <Item>Content 2</Item> },
    ],
  },
  {
    id: "section-2", 
    render: () => <Header>Section 2</Header>,
    nestedItems: [
      { render: () => <Item>Content 3</Item> },
    ],
  },
];

<Scroll 
  items={items}
  headerBehavior="push"
  scrollBehavior="smooth"
/>`),
            },
          ],
        },
      ],
    },

    // API Reference
    {
      render: createSectionHeader('API Reference', '📚', '#dc2626'),
      nestedItems: [
        {
          render: createSubHeader('Scroll Component Props', '⚙️'),
          nestedItems: [
            {
              render: createPropRow(
                'items',
                'Items',
                'Array of item objects with render functions and optional nested items',
              ),
            },
            {
              render: createPropRow(
                'headerBehavior',
                'string',
                '"stick" | "push" | "none" - How headers behave when scrolling',
              ),
            },
            { render: createPropRow('stickTo', 'string', '"top" | "bottom" | "all" - Where headers should stick') },
            { render: createPropRow('scrollBehavior', 'string', '"smooth" | "auto" - Scroll animation behavior') },
            { render: createPropRow('loading', 'object', '{ onBottomReached, render } - For infinite scrolling') },
          ],
        },
        {
          render: createSubHeader('Item Structure', '📋'),
          nestedItems: [
            {
              render: createCodeBlock(`interface Item {
  id?: string;                    // Optional unique identifier
  render: (props: {               // Render function for the item
    collapse?: {
      isOpen: boolean;            // Current collapse state
      open: () => void;           // Function to expand
      close: () => void;          // Function to collapse
    }
  }) => JSX.Element;
  nestedItems?: Item[];           // Optional nested items
}`),
            },
          ],
        },
      ],
    },

    // Real World Example
    {
      render: createSectionHeader('Real World Example: AI Chat', '🤖', '#7c3aed'),
      nestedItems: [
        {
          render: createTextBlock(
            'Check out the AI Chat demo in the sidebar! It showcases a complex real-world use case with:',
          ),
        },
        {
          render: createFeatureCard(
            '💬',
            'Question → Response Flow',
            'Messages contain nested reasoning steps that expand as the AI "thinks", then collapse when complete.',
          ),
        },
        {
          render: createFeatureCard(
            '🧠',
            'Collapsible Reasoning',
            'The "Reasoning" section auto-collapses when the response is complete, keeping only the solution visible.',
          ),
        },
        {
          render: createFeatureCard(
            '📜',
            'Deep Nesting',
            'Question → Reasoning → Steps → Output lines — four levels of nesting working seamlessly.',
          ),
        },
        {
          render: () => (
            <div style={{ width: '100%', padding: '20px 40px', backgroundColor: '#1a202c' }}>
              <a
                href="?path=/story/examples-ai-chat--ai-chat"
                target="_top"
                style={{
                  padding: '16px 20px',
                  backgroundColor: '#2d3748',
                  borderRadius: '8px',
                  border: '1px solid #4a5568',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3d4a5c';
                  e.currentTarget.style.borderColor = '#63b3ed';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#2d3748';
                  e.currentTarget.style.borderColor = '#4a5568';
                }}
              >
                <span style={{ fontSize: '24px' }}>👉</span>
                <span style={{ color: '#e2e8f0', fontSize: '14px' }}>
                  Click here to see the <strong style={{ color: '#63b3ed' }}>AI Chat Demo</strong> in action!
                </span>
                <span style={{ marginLeft: 'auto', color: '#63b3ed', fontSize: '18px' }}>→</span>
              </a>
            </div>
          ),
        },
      ],
    },

    // Tips & Best Practices
    {
      render: createSectionHeader('Tips & Best Practices', '💡', '#d97706'),
      nestedItems: [
        {
          render: createFeatureCard(
            '🎯',
            'Use Unique IDs',
            'Assign unique id properties to items for better performance and scroll-to functionality.',
          ),
        },
        {
          render: createFeatureCard(
            '🛑',
            'Stop Propagation',
            'When adding click handlers inside items (like collapse buttons), use e.stopPropagation() to prevent the scroll-to behavior from triggering.',
          ),
        },
        {
          render: createFeatureCard(
            '📏',
            'Set Container Height',
            'The Scroll component needs a container with a defined height. Use height: 100vh or a fixed pixel value.',
          ),
        },
        {
          render: createFeatureCard(
            '🎨',
            'headerBehavior: "push"',
            'The "push" mode creates a more natural feel where headers push each other out of view. Great for documentation and chat interfaces.',
          ),
        },
      ],
    },

    // Footer
    {
      render: () => (
        <div
          style={{
            width: '100%',
            padding: '30px 20px',
            backgroundColor: '#1a202c',
            textAlign: 'center',
            borderTop: '1px solid #2d3748',
          }}
        >
          <p style={{ color: '#718096', fontSize: '14px', margin: 0 }}>
            Made with 🪄 by{' '}
            <a href="https://github.com/galangel" style={{ color: '#63b3ed' }}>
              @galangel
            </a>
          </p>
          <span
            style={{
              display: 'inline-block',
              color: '#63b3ed',
              fontSize: '12px',
              margin: '8px 0 0 0',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            Explore more examples on the sidebar
          </span>
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        height: '100vh',
        backgroundColor: '#1a202c',
      }}
    >
      <Scroll items={items} headerBehavior="push" scrollBehavior="smooth" />
    </div>
  );
};

// ============================================================================
// Storybook Configuration
// ============================================================================

type Story = StoryObj<typeof WelcomePage>;

export default {
  title: 'Welcome',
  component: WelcomePage,
  parameters: {
    options: { showPanel: false },
    controls: { hideNoControlsWarning: true, disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
} as Meta;

export const Welcome: Story = {
  render: () => <WelcomePage />,
};
