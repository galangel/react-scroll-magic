import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Scroll } from '.';

describe('Scroll component', () => {
  it('renderes Scroll component', () => {
    render(<Scroll items={[{ render: () => <span>hello</span> }]} />);

    expect(screen.getByText('hello')).toBeTruthy();
  });
});
