import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './calc';

describe('Calculator operations', () => {
  test('Testa se a adição funciona corretamente', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display_teste_id')).toHaveValue('8')
  });

  test('Testa se a subtração funciona corretamente', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display_teste_id')).toHaveValue('3')
  });

  test('Testa se a multiplicação funciona corretamente', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('×'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display_teste_id')).toHaveValue('4')
  });


  test('Testa se a divisão funciona corretamente', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display_teste_id')).toHaveValue('3')
  });

  test('Testa se a divisão funciona corretamente', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('C'));
    expect(getByTestId('display_teste_id')).toHaveValue('')
  });




});
