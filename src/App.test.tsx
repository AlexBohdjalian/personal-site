import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header section links', () => {
  render(<App />);
  expect(screen.getByText(/Something/i)).toBeInTheDocument();
});
