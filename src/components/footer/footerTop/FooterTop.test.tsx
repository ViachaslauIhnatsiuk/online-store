import { render, screen } from '@testing-library/react';
import { FooterTop } from './FooterTop';

describe('Footer component', () => {
  it('Footer renders', () => {
    render(<FooterTop />);
    const footerTop = screen.getByTestId('footer-top');
    expect(footerTop).toBeInTheDocument();
  })

  it('Footer social renders', () => {
    render(<FooterTop />);
    const social = screen.getByTestId('social');
    expect(social).toBeInTheDocument();
  })
})