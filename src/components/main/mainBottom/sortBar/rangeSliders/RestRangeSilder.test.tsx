import { render, screen } from '@testing-library/react';
import { RestRangeSlider } from './RestRangeSlider';

describe('RestRangeSilder component', () => {
  it('RestRangeSilder left input renders', () => {
    render(<RestRangeSlider min={1} max={20} />);
    const input = screen.getByTestId('left-input');
    expect(input).toBeInTheDocument();
  })

  it('RestRangeSilder right input renders', () => {
    render(<RestRangeSlider min={1} max={20} />);
    const input = screen.getByTestId('right-input');
    expect(input).toBeInTheDocument();
  })

  it('RestRangeSilder input values render', () => {
    render(<RestRangeSlider min={1} max={20} />);
    const values = screen.getByTestId('values');
    expect(values).toContainHTML('div');
  })

  it('RestRangeSilder left input has value', () => {
    render(<RestRangeSlider min={1} max={20} />);
    const value = screen.getByTestId('left-value');
    expect(value).toBeInTheDocument();
  })

  it('RestRangeSilder right input has value', () => {
    render(<RestRangeSlider min={1} max={20} />);
    const value = screen.getByTestId('right-value');
    expect(value).toBeInTheDocument();
  })
})