import { render, screen } from '@testing-library/react';
import { Warning } from './Warning';

describe('Warning component', () => {
  it('Warning renders', () => {
    render(<Warning />);
    const warning = screen.getByTitle('warning');
    expect(warning).toBeInTheDocument();
  })
})