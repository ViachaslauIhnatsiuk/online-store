import { FC, useCallback, useEffect, useRef, useContext } from "react";
import { Context } from "../../../../../context/context";
import { RangeSliderProps } from "../../../../../types/RangeSlider";
import s from './RangeSlider.module.css';

const YearRangeSlider: FC<RangeSliderProps> = ({ min, max }) => {
  const { yearFilter, setYearFilter } = useContext(Context);
  const minValueRef = useRef<HTMLInputElement>(null);
  const maxValueRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValueRef.current) {
      const min = getPercent(yearFilter[0]);
      const max = getPercent(Number(maxValueRef.current.value));
      if (range.current) {
        range.current.style.left = `${min}%`;
        range.current.style.width = `${max - min}%`;
      }
    }
  }, [yearFilter, getPercent]);

  useEffect(() => {
    if (minValueRef.current) {
      const min = getPercent(Number(minValueRef.current.value));
      const max = getPercent(yearFilter[1]);
      if (range.current) {
        range.current.style.width = `${max - min}%`;
      }
    }
  }, [yearFilter, getPercent]);

  return (
    <div className={s.wrapper}>
      <div className={s.slider__wrapper}>
        <input
          data-testid="left-input"
          type="range"
          min={min}
          max={max}
          value={yearFilter[0]}
          ref={minValueRef}
          className={`${s.thumb} ${s.thumb__left}`}
          style={(yearFilter[0] > max - 100) ? { zIndex: '5' } : undefined}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(Number(e.target.value), yearFilter[1] - 1);
            setYearFilter([value, yearFilter[1]]);
          }}
        />
        <input
          data-testid="right-input"
          type="range"
          min={min}
          max={max}
          value={yearFilter[1]}
          ref={maxValueRef}
          className={`${s.thumb} ${s.thumb__right}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(Number(e.target.value), yearFilter[0] + 1);
            setYearFilter([yearFilter[0], value]);
          }}
        />
        <div className={s.slider}>
          <div className={s.track} />
          <div ref={range} className={s.range} />
        </div>
      </div>
      <div className={s.values} data-testid="values">
        <div className={s.left__value} data-testid="left-value">{yearFilter[0]}</div>
        <div className={s.right__value} data-testid="right-value">{yearFilter[1]}</div>
      </div>
    </div>
  );
};

export { YearRangeSlider };



