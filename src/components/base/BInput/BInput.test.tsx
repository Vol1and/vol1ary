import React, {useState} from 'react';
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import BButton from "./BInput";
import BInput from "./BInput";



describe('BInput', () =>{
    test('renders input', () => {
        render(<BInput />);
        const input = screen.getByPlaceholderText('');
        expect(input).toBeInTheDocument();
    });
    test('displays placeholder', () => {
        render(<BInput placeholder='bruh man' />);
        const input = screen.getByPlaceholderText('bruh man');
        expect(input).toBeInTheDocument();
    });
    test('changes passed modelValue', () => {
        let value = 'Валерий'
        render(<BInput value={value} onChange={(val) => value = val} />);
        const input: HTMLInputElement = screen.getByPlaceholderText('');

        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'Сергей' } });
        expect(value).toBe('Сергей');
    });
})

