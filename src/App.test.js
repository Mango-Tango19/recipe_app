import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heder', () => {
  render(<App />);
  const headingElement = screen.getByText(/love/i);
  expect(headingElement).toBeInTheDocument();
});
