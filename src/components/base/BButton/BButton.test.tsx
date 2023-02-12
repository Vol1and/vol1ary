import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import BButton from "./BButton";



describe('BButton', () =>{
  test('displays passed default slot', () => {
    render(<BButton>button text</BButton>);
    const button = screen.getByText(/button text/i);
    expect(button).toBeInTheDocument();
  });

  test('makes button tag disabled if passed disabled prop', () => {

    render(<BButton disabled >button text</BButton>);
    const button = screen.getByText(/button text/i);
    // @ts-ignore
    expect(button.disabled).toBe(true);
  });

  test('adds disabled class if disabled', () => {
    render(<BButton disabled >button text</BButton>);
    const linkElement = screen.getByText(/button text/i);
    expect(linkElement.className).toContain('bbutton--disabled');
  });

  test('adds variant class correctly', () => {
    render(<BButton>button text</BButton>);
    let linkElement = screen.getByText(/button text/i);
    expect(linkElement.className).toContain('bbutton--primary');

    cleanup()
    render(<BButton variant={'secondary'} >button text</BButton>);
    linkElement = screen.getByText(/button text/i);
    expect(linkElement.className).toContain('bbutton--secondary');
  });
})

