import { render, screen } from '@testing-library/react';
import { MainTop } from './MainTop';

describe('MainTop component', () => {
  it('MainTop wrapper renders', () => {
    render(<MainTop />);
    const wrapper = screen.getByTitle('wrapper');
    expect(wrapper).toBeInTheDocument();
  })

  it('MainTop image renders', () => {
    render(<MainTop />);
    const image = screen.getByAltText('about');
    expect(image).toBeInTheDocument();
  })

  it('MainTop title renders', () => {
    render(<MainTop />);
    const title = screen.getByTitle('title');
    expect(title).toHaveTextContent(/[a-z]/i);
  })

  it('MainTop text renders', () => {
    render(<MainTop />);
    const text = screen.getByTitle('text');
    expect(text).toHaveTextContent(/[a-z]/i);
  })
})