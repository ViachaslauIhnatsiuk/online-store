interface RangeSliderProps {
  min: number;
  max: number;
}

enum RangeValues {
  MIN_REST = 1,
  MAX_REST = 20,
  MIN_YEAR = 2015,
  MAX_YEAR = 2022,
}

export { RangeValues };
export type { RangeSliderProps };