import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';

describe('Header component', () => {
  it('Header input renders', () => {
    render(<Header />);
    const input = screen.getByPlaceholderText(/Search products/i);
    expect(input).toBeInTheDocument();
  })

  it('Header input images change', () => {
    render(<Header />);
    const input = screen.getByPlaceholderText(/Search products/i);
    expect(screen.queryByTitle('search')).toBeNull();
    fireEvent.blur(input);
    expect(screen.getByTitle('search')).toBeInTheDocument();
  })

  it("should have certain type", () => {
    render(<Header />);
    const input = screen.getByPlaceholderText(/Search products/i);
    expect(input).toHaveAttribute('type', 'text');
  });
})
