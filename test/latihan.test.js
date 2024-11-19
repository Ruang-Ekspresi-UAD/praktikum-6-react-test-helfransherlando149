import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

test('Counter Default Value must be 0', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    expect(countValue).toHaveTextContent('0');
});

test('increment works when button clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent('1');
});

test('decrement works when button clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const decrementButton = screen.getByTestId('decrement-button');
    fireEvent.click(decrementButton);
    expect(countValue).toHaveTextContent('-1');
});

test('reset the count using reset button', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');

    fireEvent.click(incrementButton); 
    fireEvent.click(resetButton); 
    expect(countValue).toHaveTextContent('0');
});

test('Greeting component renders {nama kalian}', () => {
    render(<Greeting name="Hi Helfrans Herlando" />);
    const greetingMessage = screen.getByTestId('greeting');
    expect(greetingMessage).toHaveTextContent('Hi Helfrans Herlando');
});

test('Greeting component renders {nama dosen kalian}', () => {
    render(<Greeting name="Pak Iwan" />);
    const greetingMessage = screen.getByTestId('greeting');
    expect(greetingMessage).toHaveTextContent('Hello, Pak Iwan');
});

test('triggers alert with correct message when clicked', () => {
    window.alert = jest.fn(); 
    render(<AlertButton message="Hi, Helfrans Herlando!" />);
    const button = screen.getByTestId('alert-button');
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith('Hi, Helfrans Herlando!');
});