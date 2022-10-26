import { FC, useContext } from 'react';
import { Context } from '../../../../../context/context';
import { ISortBarFilter } from '../../../../../types/Filters';
import { ReactComponent as Check } from '../../../../../assets/icons/check.svg';
import s from './SortBarFilter.module.css';

const SortBarFilter: FC<ISortBarFilter> = ({ title, id, filter, addFilter }) => {
  const { filters } = useContext(Context);
  return (
    <div className={s.filter__option}>
      <div className={s.filter__checkbox} onClick={addFilter} title={title} id={id}>
        {filters[filter].includes(id)
          ? <Check className={s.filter__checked} />
          : null}
      </div>
      <div>{id.toUpperCase()}</div>
    </div>
  )
}

export { SortBarFilter };