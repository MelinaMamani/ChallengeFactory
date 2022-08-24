import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Factory', () => {
  render(<App />);
  const linkElement = screen.getByText('Factory');
  expect(linkElement).toBeInTheDocument();
});
