import { render, screen } from '@testing-library/react';
import { SortBar } from './SortBar';

describe('SortBar component', () => {
  it('SortBar renders', () => {
    render(<SortBar />);
    const sortBar = screen.getByTestId('sortbar');
    expect(sortBar).toBeInTheDocument();
  })

  it('Rest-range-filter renders', () => {
    render(<SortBar />);
    const rangeFilter = screen.getByTestId('rest-range-filter');
    expect(rangeFilter).toBeInTheDocument();
  })

  it('Year-range-filter renders', () => {
    render(<SortBar />);
    const yearFilter = screen.getByTestId('year-range-filter');
    expect(yearFilter).toBeInTheDocument();
  })
})