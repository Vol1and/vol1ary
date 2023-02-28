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

    render(<BButton disabled>button text</BButton>);
    const button = screen.getByText(/button text/i);
    // @ts-ignore
    expect(button.disabled).toBe(true);
  });

  test('adds disabled class if disabled', () => {
    render(<BButton disabled>button text</BButton>);
    const button = screen.getByText(/button text/i);
    expect(button.className).toContain('b-button--disabled');
  });

  test('adds variant class correctly', () => {
    render(<BButton>button text</BButton>);
    let button = screen.getByText(/button text/i);
    expect(button.className).toContain('b-button--primary');

    cleanup()
    render(<BButton variant={'secondary'} >button text</BButton>);
    button = screen.getByText(/button text/i);
    expect(button.className).toContain('b-button--secondary');
  });

  test('adds rounded class only if rounded', () => {
    render(<BButton>button text</BButton>);
    let button = screen.getByText(/button text/i);
    expect(button.className).not.toContain('b-button--rounded');

    cleanup()

    render(<BButton rounded>button text</BButton>);
    button = screen.getByText(/button text/i);
    expect(button.className).toContain('b-button--rounded');
  });

  test('adds size class if rounded (md class if size not set)', () => {
    render(<BButton>button text</BButton>);
    let button = screen.getByText(/button text/i);
    expect(button.className).toContain(`b-button--md`);

    cleanup()

    render(<BButton size="sm">button text</BButton>);
    button = screen.getByText(/button text/i);
    expect(button.className).toContain(`b-button--sm`);

    cleanup()

    render(<BButton size="lg">button text</BButton>);
    button = screen.getByText(/button text/i);
    expect(button.className).toContain(`b-button--lg`);
  });

  test('add flat class only if flat', () => {
    render(<BButton>button text</BButton>);
    let button = screen.getByText(/button text/i);
    expect(button.className).not.toContain(`b-button--flat`);

    cleanup()

    render(<BButton flat>button text</BButton>);
    button = screen.getByText(/button text/i);
    expect(button.className).toContain(`b-button--flat`);
  });
})

