# Scroll Component

[Live Demo](https://galangel.github.io/react-scroll-magic/)

## Overview

The Scroll Magic Component is a React component that provides smooth scrolling functionality for your web application. It allows you to create scroll between items and headers and keep the headers visible.

## Features

- **Sticky Headers**: Headers can stick to top, bottom, or both directions
- **Click-to-Scroll**: Click any header to smoothly scroll to its content
- **Collapsible Sections**: Headers can expand/collapse their nested content
- **Infinite Scrolling**: Load more content when reaching the bottom
- **Nested Structure**: Support for deeply nested hierarchical content
- **Multiple Header Behaviors**: Choose between sticky, push, or normal header behavior
- **TypeScript Support**: Fully typed with comprehensive interfaces
- **Customizable Rendering**: Complete control over how items and loading states are rendered

## Installation

To install the Scroll Component, use npm or yarn:

```bash
npm i @galangel/react-scroll-magic
```

or

```bash
yarn add @galangel/react-scroll-magic
```

## Usage

Here is a basic example of how to use the Scroll Component in your React application:

```jsx
import React from 'react';
import { Scroll } from '@galangel/react-scroll-magic';

const App = () => {
  const items = [
    {
      // Header item with nested content
      render: ({ collapse }) => (
        <div style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
          Header 1
          {collapse && (
            <button onClick={collapse.isOpen ? collapse.close : collapse.open}>{collapse.isOpen ? '▼' : '▶'}</button>
          )}
        </div>
      ),
      nestedItems: [
        {
          // Regular item
          render: () => <div style={{ padding: '10px' }}>Item 1.1</div>,
        },
        {
          render: () => <div style={{ padding: '10px' }}>Item 1.2</div>,
        },
      ],
    },
    {
      // Simple item without nesting
      render: () => <div style={{ padding: '10px' }}>Simple Item</div>,
    },
  ];

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Scroll items={items} stickTo="all" headerBehavior="stick" scrollBehavior="smooth" />
    </div>
  );
};

export default App;
```

### Infinite Scrolling Example

```jsx
import React, { useState } from 'react';
import { Scroll } from '@galangel/react-scroll-magic';

const InfiniteScrollExample = () => {
  const [items, setItems] = useState([
    { render: () => <div>Initial Item 1</div> },
    { render: () => <div>Initial Item 2</div> },
  ]);

  const loadMoreItems = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newItems = Array.from({ length: 10 }, (_, i) => ({
      render: () => <div>New Item {items.length + i + 1}</div>,
    }));

    setItems((prev) => [...prev, ...newItems]);
  };

  const loading = {
    onBottomReached: loadMoreItems,
    render: (isLoading) => (
      <div style={{ textAlign: 'center', padding: '20px' }}>{isLoading ? 'Loading...' : 'Load more'}</div>
    ),
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Scroll items={items} loading={loading} headerBehavior="none" />
    </div>
  );
};
```

## Props

The Scroll Component accepts the following props:

| Prop             | Type                              | Default    | Description                                                                                                |
| ---------------- | --------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| `items`          | `Items`                           | Required   | Array of items to render. Each item has a `render` function and optional `nestedItems`                     |
| `stickTo`        | `'top' \| 'bottom' \| 'all'`      | `'all'`    | Where headers should stick when scrolling                                                                  |
| `scrollBehavior` | `'auto' \| 'instant' \| 'smooth'` | `'smooth'` | CSS scroll-behavior when clicking headers to scroll to content                                             |
| `headerBehavior` | `'stick' \| 'push' \| 'none'`     | `'none'`   | How headers behave: `stick` = sticky positioning, `push` = headers push down content, `none` = normal flow |
| `loading`        | `Loading`                         | Optional   | Configuration for infinite scrolling and loading states                                                    |

### Items Type Definition

```typescript
type Items = Item[];

interface Item {
  id?: string; // Optional unique identifier
  render: (renderProps: RenderProps) => JSX.Element; // Function to render the item
  nestedItems?: Item[]; // Optional nested items (makes this a header)
}

interface RenderProps {
  collapse?: {
    open: () => void; // Function to expand nested items
    close: () => void; // Function to collapse nested items
    isOpen: boolean; // Current collapse state
  };
}
```

### Loading Type Definition

```typescript
interface Loading {
  onBottomReached?: () => Promise<void>; // Callback when user scrolls to bottom
  render?: (isLoading: boolean) => JSX.Element; // Custom loading indicator renderer
}
```

## Item Structure

- **Simple Items**: Items without `nestedItems` are rendered as regular list items
- **Header Items**: Items with `nestedItems` become clickable headers that can:
  - Scroll to their content when clicked
  - Be collapsed/expanded using the `collapse` props in the render function
  - Stick to top/bottom based on `stickTo` and `headerBehavior` settings
- **Nested Structure**: Items can be nested to any depth for complex hierarchical layouts

## Styling

The component uses CSS classes that you can target for styling:

```css
/* Main scroll container */
.scroll-list {
  /* Your styles here */
}

/* Header items */
.scroll-header {
  /* Your styles here */
}

/* Sticky header behavior */
.scroll-header.stick {
  position: sticky;
  /* Additional sticky styles */
}

/* Push header behavior */
.scroll-header.push {
  /* Push behavior styles */
}

/* Regular items */
.scroll-item {
  /* Your styles here */
}
```

**Important**: Make sure your scroll container has a defined height for the scrolling to work properly:

```jsx
<div style={{ height: '400px' }}>
  {' '}
  {/* Define height here */}
  <Scroll items={items} />
</div>
```

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING](CONTRIBUTING.md) guidelines before submitting a pull request.

## Contact

For any questions or feedback, please open an issue on GitHub.
