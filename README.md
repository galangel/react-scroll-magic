<p align="center">
  <img src="https://img.shields.io/badge/🪄-React_Scroll_Magic-667eea?style=for-the-badge&labelColor=764ba2" alt="React Scroll Magic" />
</p>

<h1 align="center">🪄 React Scroll Magic</h1>

<p align="center">
  <strong>Create magical scroll experiences with nested sticky headers, collapsible sections, and smooth animations.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@galangel/react-scroll-magic"><img src="https://img.shields.io/npm/v/@galangel/react-scroll-magic.svg?style=flat-square&color=667eea" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@galangel/react-scroll-magic"><img src="https://img.shields.io/npm/dm/@galangel/react-scroll-magic.svg?style=flat-square&color=764ba2" alt="npm downloads" /></a>
  <a href="https://github.com/galangel/react-scroll-magic/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square" alt="license" /></a>
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178c6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-18+-61dafb?style=flat-square&logo=react&logoColor=white" alt="React 18+" />
</p>

<p align="center">
  <a href="https://galangel.github.io/react-scroll-magic/">📖 Live Demo & Documentation</a>
</p>

---

## ✨ Key Features

| Feature                   | Description                                                                 |
| ------------------------- | --------------------------------------------------------------------------- |
| 📌 **Sticky Headers**     | Headers stick to top as you scroll, with support for nested sticky behavior |
| 🎯 **Nested Structure**   | Create deeply nested hierarchies with items inside items                    |
| 📦 **Collapse/Expand**    | Each section with nested content can be collapsed or expanded               |
| ♾️ **Infinite Scrolling** | Built-in support for loading more items when reaching the bottom            |
| 🎨 **Fully Customizable** | Complete control over rendering via render props                            |
| 🔤 **TypeScript Ready**   | Fully typed with comprehensive interfaces                                   |

---

## 🚀 Quick Start

### Installation

```bash
npm install @galangel/react-scroll-magic
```

or

```bash
yarn add @galangel/react-scroll-magic
```

### Basic Usage

```jsx
import { Scroll } from '@galangel/react-scroll-magic';

const items = [
  {
    id: 'section-1',
    render: ({ collapse }) => (
      <div style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        Header 1
        {collapse && (
          <button onClick={collapse.isOpen ? collapse.close : collapse.open}>{collapse.isOpen ? '▼' : '▶'}</button>
        )}
      </div>
    ),
    nestedItems: [
      { render: () => <div style={{ padding: '10px' }}>Item 1.1</div> },
      { render: () => <div style={{ padding: '10px' }}>Item 1.2</div> },
    ],
  },
  {
    id: 'section-2',
    render: () => <div style={{ padding: '10px' }}>Simple Item</div>,
  },
];

function App() {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Scroll items={items} headerBehavior="push" scrollBehavior="smooth" />
    </div>
  );
}
```

---

## 📚 API Reference

### Scroll Component Props

| Prop             | Type                              | Default    | Description                                                                            |
| ---------------- | --------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| `items`          | `Items`                           | Required   | Array of items to render. Each item has a `render` function and optional `nestedItems` |
| `stickTo`        | `'top' \| 'bottom' \| 'all'`      | `'all'`    | Where headers should stick when scrolling                                              |
| `scrollBehavior` | `'auto' \| 'instant' \| 'smooth'` | `'smooth'` | CSS scroll-behavior when clicking headers                                              |
| `headerBehavior` | `'stick' \| 'push' \| 'none'`     | `'none'`   | How headers behave when scrolling                                                      |
| `loading`        | `Loading`                         | Optional   | Configuration for infinite scrolling                                                   |

### Item Structure

```typescript
interface Item {
  id?: string; // Optional unique identifier
  render: (props: {
    // Render function for the item
    collapse?: {
      isOpen: boolean; // Current collapse state
      open: () => void; // Function to expand
      close: () => void; // Function to collapse
    };
  }) => JSX.Element;
  nestedItems?: Item[]; // Optional nested items (makes this a header)
}
```

### Loading Type Definition

```typescript
interface Loading {
  onBottomReached?: () => Promise<void>; // Callback when user scrolls to bottom
  render?: (isLoading: boolean) => JSX.Element; // Custom loading indicator renderer
}
```

---

## ♾️ Infinite Scrolling Example

```jsx
import React, { useState } from 'react';
import { Scroll } from '@galangel/react-scroll-magic';

const InfiniteScrollExample = () => {
  const [items, setItems] = useState([
    { render: () => <div>Initial Item 1</div> },
    { render: () => <div>Initial Item 2</div> },
  ]);

  const loadMoreItems = async () => {
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

---

## 🎨 Styling & CSS Classes

The component uses semantic CSS classes that you can target for custom styling. Here's a complete reference:

### CSS Class Reference

| Class Name                | Element | Description                                     |
| ------------------------- | ------- | ----------------------------------------------- |
| `.scroll-list`            | `<ul>`  | Main scroll container element                   |
| `.scroll-item`            | `<li>`  | Regular list item (items without `nestedItems`) |
| `.scroll-header`          | `<li>`  | Header item (items with `nestedItems`)          |
| `.scroll-header.stick`    | `<li>`  | Header with `headerBehavior="stick"`            |
| `.scroll-header.push`     | `<li>`  | Header with `headerBehavior="push"`             |
| `.scroll-header.none`     | `<li>`  | Header with `headerBehavior="none"`             |
| `.scroll-loading`         | `<li>`  | Loading indicator container                     |
| `.scroll-loading.loading` | `<li>`  | Loading indicator when actively loading         |

### Styling Examples

```css
/* Main scroll container */
.scroll-list {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-y: auto;
}

/* All items (headers and regular items) */
.scroll-item,
.scroll-header {
  width: 100%;
  box-sizing: border-box;
}

/* Regular items */
.scroll-item {
  padding: 12px 16px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

/* Header items - base styles */
.scroll-header {
  padding: 16px 20px;
  background-color: #f5f5f5;
  font-weight: 600;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}

/* Sticky header behavior */
.scroll-header.stick {
  position: sticky;
  /* top/bottom values are set dynamically by the component */
}

/* Push header behavior */
.scroll-header.push {
  position: sticky;
  /* top value is set dynamically by the component */
}

/* Header hover effect */
.scroll-header:hover {
  background-color: #e8e8e8;
}

/* Loading indicator */
.scroll-loading {
  display: none;
  padding: 20px;
  text-align: center;
}

.scroll-loading.loading {
  display: block;
}

/* Loading spinner animation */
.scroll-loading.loading::after {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

### Dark Theme Example

```css
/* Dark theme styling */
.scroll-list {
  background-color: #1a202c;
}

.scroll-item {
  background-color: #2d3748;
  color: #e2e8f0;
  border-bottom: 1px solid #4a5568;
}

.scroll-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.scroll-header:hover {
  filter: brightness(1.1);
}

.scroll-loading.loading::after {
  border-color: #4a5568;
  border-top-color: #667eea;
}
```

### Important Notes

> ⚠️ **Container Height Required**: The scroll container must have a defined height for scrolling to work properly.

```jsx
<div style={{ height: '400px' }}>
  {' '}
  {/* or height: '100vh' */}
  <Scroll items={items} />
</div>
```

---

## 💡 Tips & Best Practices

| Tip                           | Description                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 🎯 **Use Unique IDs**         | Assign unique `id` properties to items for better performance and scroll-to functionality                                |
| 🛑 **Stop Propagation**       | When adding click handlers inside items (like collapse buttons), use `e.stopPropagation()` to prevent scroll-to behavior |
| 📏 **Set Container Height**   | The Scroll component needs a container with a defined height (`height: 100vh` or fixed pixels)                           |
| 🎨 **headerBehavior: "push"** | The "push" mode creates a natural feel where headers push each other out of view                                         |

---

## 🤖 Real World Example: AI Chat

Check out the [AI Chat demo](https://galangel.github.io/react-scroll-magic/?path=/story/examples-ai-chat--ai-chat) showcasing a complex real-world use case with:

- 💬 **Question → Response Flow**: Messages with nested reasoning steps
- 🧠 **Collapsible Reasoning**: Auto-collapse when complete
- 📜 **Deep Nesting**: Four levels of nesting working seamlessly

---

## 📄 License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please read the [CONTRIBUTING](CONTRIBUTING.md) guidelines before submitting a pull request.

---

## 💬 Contact

For any questions or feedback, please [open an issue](https://github.com/galangel/react-scroll-magic/issues) on GitHub.

---

<p align="center">
  Made with 🪄 by <a href="https://github.com/galangel">@galangel</a>
</p>

<p align="center">
  <a href="https://www.buymeacoffee.com/galangel"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" /></a>
</p>
