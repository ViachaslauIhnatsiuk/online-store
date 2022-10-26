import { render, screen } from '@testing-library/react';
import { YearRangeSlider } from './YearRangeSlider';

describe('YearRangeSilder component', () => {
  it('YearRangeSilder left input renders', () => {
    render(<YearRangeSlider min={1} max={20} />);
    const input = screen.getByTestId('left-input');
    expect(input).toBeInTheDocument();
  })

  it('YearRangeSilder right input renders', () => {
    render(<YearRangeSlider min={1} max={20} />);
    const input = screen.getByTestId('right-input');
    expect(input).toBeInTheDocument();
  })

  it('YearRangeSilder input values render', () => {
    render(<YearRangeSlider min={1} max={20} />);
    const values = screen.getByTestId('values');
    expect(values).toContainHTML('div');
  })

  it('YearRangeSilder left input has value', () => {
    render(<YearRangeSlider min={1} max={20} />);
    const value = screen.getByTestId('left-value');
    expect(value).toBeInTheDocument();
  })

  it('YearRangeSilder right input has value', () => {
    render(<YearRangeSlider min={1} max={20} />);
    const value = screen.getByTestId('right-value');
    expect(value).toBeInTheDocument();
  })
})