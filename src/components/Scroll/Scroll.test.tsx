import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Scroll } from '.';

// describe('Scroll component', () => {
//   it('renderes Scroll component', () => {
//     render(
//       <Scroll style={{ height: '100px' }}>
//         <Scroll.Header style={{ height: '20px' }}>header1</Scroll.Header>
//         <Scroll.Item style={{ height: '20px' }}>item1</Scroll.Item>
//         <Scroll.Header style={{ height: '20px' }}>header2</Scroll.Header>
//         <Scroll.Item style={{ height: '20px' }}>item2</Scroll.Item>
//       </Scroll>,
//     );

//     expect(screen.getByText('header1')).toBeTruthy();
//   });
// });
