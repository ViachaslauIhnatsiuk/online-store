import { renderHook, act } from '@testing-library/react-hooks';
import { usePriceCount } from './usePriceCount';

describe('usePriceCount custom hook testing', () => {
  it('countBagPrices return value', () => {
    const { result } = renderHook(() => usePriceCount());
    act(() => {
      result.current.countBagPrices();
    })
    expect(result.current.countBagPrices()).not.toBeUndefined();
  })

  it('countBagPrices return string', () => {
    const { result } = renderHook(() => usePriceCount());
    act(() => {
      result.current.countBagPrices();
    })
    expect(typeof result.current.countBagPrices()).toBe('string');
  })

  it('transformPrice return value', () => {
    const { result } = renderHook(() => usePriceCount());
    act(() => {
      result.current.transformPrice(1000);
    })
    expect(result.current.transformPrice(1000)).not.toBeUndefined();
  })

  it('transformPrice return string', () => {
    const { result } = renderHook(() => usePriceCount());
    act(() => {
      result.current.transformPrice(1000);
    })
    expect(typeof result.current.transformPrice(1000)).toBe('string');
  })
})
