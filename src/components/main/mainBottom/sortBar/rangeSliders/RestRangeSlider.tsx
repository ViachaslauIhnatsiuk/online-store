import { FC, useCallback, useEffect, useRef, useContext } from "react";
import { Context } from "../../../../../context/context";
import { RangeSliderProps } from "../../../../../types/RangeSlider";
import s from './RangeSlider.module.css';

const RestRangeSlider: FC<RangeSliderProps> = ({ min, max }) => {
  const { restFilter, setRestFilter } = useContext(Context);
  const minValueRef = useRef<HTMLInputElement>(null);
  const maxValueRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValueRef.current) {
      const min = getPercent(restFilter[0]);
      const max = getPercent(Number(maxValueRef.current.value));
      if (range.current) {
        range.current.style.left = `${min}%`;
        range.current.style.width = `${max - min}%`;
      }
    }
  }, [restFilter, getPercent]);

  useEffect(() => {
    if (minValueRef.current) {
      const min = getPercent(Number(minValueRef.current.value));
      const max = getPercent(restFilter[1]);
      if (range.current) {
        range.current.style.width = `${max - min}%`;
      }
    }
  }, [restFilter, getPercent]);

  return (
    <div className={s.wrapper}>
      <div className={s.slider__wrapper}>
        <input
          data-testid="left-input"
          type="range"
          min={min}
          max={max}
          value={restFilter[0]}
          ref={minValueRef}
          className={`${s.thumb} ${s.thumb__left}`}
          style={(restFilter[0] > max - 100) ? { zIndex: '5' } : undefined}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(Number(e.target.value), restFilter[1] - 1);
            setRestFilter([value, restFilter[1]]);
          }}
        />
        <input
          data-testid="right-input"
          type="range"
          min={min}
          max={max}
          value={restFilter[1]}
          ref={maxValueRef}
          className={`${s.thumb} ${s.thumb__right}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(Number(e.target.value), restFilter[0] + 1);
            setRestFilter([restFilter[0], value]);
          }}
        />
        <div className={s.slider}>
          <div className={s.track} />
          <div ref={range} className={s.range} />
        </div>
      </div>
      <div className={s.values} data-testid="values">
        <div className={s.left__value} data-testid="left-value">{restFilter[0]}</div>
        <div className={s.right__value} data-testid="right-value">{restFilter[1]}</div>
      </div>
    </div>
  );
};

export { RestRangeSlider };



