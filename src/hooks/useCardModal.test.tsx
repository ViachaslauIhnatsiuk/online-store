import { renderHook, act } from '@testing-library/react-hooks';
import { useCardModal } from './useCardModal';

describe('useCardModal custom hook testing', () => {
  it('getBagItemCount return value', () => {
    const { result } = renderHook(() => useCardModal());
    act(() => {
      result.current.getBagItemCount('watch');
    })
    expect(result.current.getBagItemCount('watch')).not.toBeUndefined();
  })

  it('getBagItemCount return number', () => {
    const { result } = renderHook(() => useCardModal());
    act(() => {
      result.current.getBagItemCount('watch');
    })
    expect(typeof result.current.getBagItemCount('watch')).toBe('number');
  })
})