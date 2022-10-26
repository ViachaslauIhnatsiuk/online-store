import { FC, useContext } from 'react';
import { Context } from '../../../../context/context';
import { useFilters } from '../../../../hooks/useFilters';
import { useSort } from '../../../../hooks/useSort';
import { RestRangeSlider } from './rangeSliders/RestRangeSlider';
import { YearRangeSlider } from './rangeSliders/YearRangeSlider';
import { SortBarFilter } from './sortBarFilter/SortBarFilter';
import s from './SortBar.module.css';

const SORT_OPTIONS = ['PRICE LOW TO HIGH', 'PRICE HIGH TO LOW', 'YEAR LOW TO HIGH', 'YEAR HIGH TO LOW', 'NAME LOW TO HIGH', 'NAME HIGH TO LOW'];

const SortBar: FC = () => {
  const { sortValue } = useContext(Context);
  const { addFilter } = useFilters();
  const { sortState, sortCards } = useSort();

  return (
    <div className={s.wrapper} data-testid='sortbar'>
      <div className={s.filter} data-testid='rest-range-filter'>
        <div className={s.filter__title}>SORT BY REST</div>
        <RestRangeSlider min={1} max={20} />
      </div>
      <div className={s.filter} data-testid='year-range-filter'>
        <div className={s.filter__title}>SORT BY MODEL YEAR</div>
        <YearRangeSlider min={2015} max={2022} />
      </div>
      <div className={s.sort}>
        <div className={s.sort__title}>SORT BY</div>
        <div className={s.sort__options} onClick={sortCards}>
          <div className={s.sort__option} title='option'>{sortValue}</div>
          {SORT_OPTIONS.map((item, index) => {
            return <div className={sortState ? s.expanded__option : s.collapsed} key={index}>{item}</div>
          })}
        </div>
      </div>
      <div className={s.filter}>
        <div className={s.filter__title}>SHOW POPULAR</div>
        <div className={s.filter__options}>
          <SortBarFilter title='popularity' id='popular' filter='popularityFilter' addFilter={addFilter} />
        </div>
      </div>
      <div className={s.filter}>
        <div className={s.filter__title}>GENDER</div>
        <div className={s.filter__options}>
          <SortBarFilter title='gender' id='for her' filter='genderFilter' addFilter={addFilter} />
          <SortBarFilter title='gender' id='for him' filter='genderFilter' addFilter={addFilter} />
        </div>
      </div>
      <div className={s.filter}>
        <div className={s.filter__title}>CASE MATERIAL</div>
        <div className={s.filter__options}>
          <SortBarFilter title='material' id='white gold' filter='materialFilter' addFilter={addFilter} />
          <SortBarFilter title='material' id='rose gold' filter='materialFilter' addFilter={addFilter} />
          <SortBarFilter title='material' id='yellow gold' filter='materialFilter' addFilter={addFilter} />
          <SortBarFilter title='material' id='steel' filter='materialFilter' addFilter={addFilter} />
        </div>
      </div>
      <div className={s.filter}>
        <div className={s.filter__title}>WATCH SHAPE</div>
        <div className={s.filter__options}>
          <SortBarFilter title='shape' id='square' filter='shapeFilter' addFilter={addFilter} />
          <SortBarFilter title='shape' id='round' filter='shapeFilter' addFilter={addFilter} />
          <SortBarFilter title='shape' id='rectangular' filter='shapeFilter' addFilter={addFilter} />
          <SortBarFilter title='shape' id='tonneau' filter='shapeFilter' addFilter={addFilter} />
        </div>
      </div>
      <div className={s.filter}>
        <div className={s.filter__title}>MOVEMENT</div>
        <div className={s.filter__options}>
          <SortBarFilter title='movement' id='automatic' filter='movementFilter' addFilter={addFilter} />
          <SortBarFilter title='movement' id='quartz' filter='movementFilter' addFilter={addFilter} />
        </div>
      </div>
      <div className={s.filter}>
        <div className={s.filter__title}>TYPE OF STRAP</div>
        <div className={s.filter__options}>
          <SortBarFilter title='strap' id='leather' filter='strapFilter' addFilter={addFilter} />
          <SortBarFilter title='strap' id='metal' filter='strapFilter' addFilter={addFilter} />
        </div>
      </div>
      <div className={s.reset} onClick={() => localStorage.clear()}>RESET</div>
    </div>
  )
}

export { SortBar };