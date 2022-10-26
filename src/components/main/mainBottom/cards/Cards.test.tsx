import { render, screen } from '@testing-library/react';
import { Cards } from './Cards';

describe('Cards component', () => {
  it('Cards wrapper renders', () => {
    render(<Cards />);
    const wrapper = screen.getByTitle('wrapper');
    expect(wrapper).toBeInTheDocument();
  })

  it('Cards counter renders', () => {
    render(<Cards />);
    const wrapper = screen.getByTitle('counter');
    expect(wrapper).toHaveTextContent(/models/i);
  })
})