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
import { ScrollComponent } from '@galangel/react-scroll-magic';

const App = () => {
  return (
    <Scroll
      items={
        [
          /* array of items */
        ]
      }
      {...props}
    />
  );
};

export default App;
```

## Props

The Scroll Component accepts the following props:

| Prop                      | Type                                  | Description                                                     |
| ------------------------- | ------------------------------------- | --------------------------------------------------------------- |
| `stickTo`                 | `top`\|`bottom`\|`all`                | how headers should stick                                        |
| `scrollBehavior`          | `scrollBehavior CSS property`         | how the scrolling should behave when clicking a header          |
| `headerBehavior`          | `stick`\|`push`\|`none`               | how the headers behave when scrolling                           |
| `items`                   | `items array`                         | nested structure of items                                       |
| `loading`                 | `Loading`                             | object containing loading state and optional callbacks          |
| `loading.onBottomReached` | `() => Promise<void>`                 | Optional callback function triggered when the bottom is reached |
| `loading.render`          | `(isLoading: boolean) => JSX.Element` | Optional render function for custom loading indicator           |

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING](CONTRIBUTING.md) guidelines before submitting a pull request.

## Contact

For any questions or feedback, please open an issue on GitHub.
