# Scroll Component

[Live Demo](https://galangel.github.io/react-scroll-magic/)

## Overview

The Scroll Magic Component is a React component that provides smooth scrolling functionality for your web application. It allows you to create scroll between items and headers and keep the headers visible.

## Features

- sticky headers in both directions
- scroll to header by click
- typescript

## Installation

To install the Scroll Component, use npm or yarn:

```bash
npm install react-scroll-magic
```

or

```bash
yarn add react-scroll-magic
```

## Usage

Here is a basic example of how to use the Scroll Component in your React application:

```jsx
import React from 'react';
import { ScrollComponent } from 'react-scroll-magic';

const App = () => {
  return (
    <Scroll>
      <Scroll.Header>
        <h1>Scroll down to see the magic!</h1>
      </Scroll.Header>
      <Scroll.Item>
        <p>Keep scrolling...</p>
      </Scroll.Item>
    </Scroll>
  );
};

export default App;
```

## Props

The Scroll Component accepts the following props:

| Prop             | Type                          | Description                                            |
| ---------------- | ----------------------------- | ------------------------------------------------------ |
| `stickTo`        | `top`\|`bottom`\|`all`        | how headers should stick                               |
| `scrollBehavior` | `scrollBehavior CSS property` | how the scrolling should behave when clicking a header |

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING](CONTRIBUTING.md) guidelines before submitting a pull request.

## Contact

For any questions or feedback, please open an issue on GitHub.
