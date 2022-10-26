import { FC, useContext } from 'react';
import { Context } from '../../../../context/context';
import { useFilters } from '../../../../hooks/useFilters';
import { CardPreview } from './cardPreview/CardPreview';
import { RangeValues } from '../../../../types/RangeSlider';
import { Card } from './card/Card';
import { ReactComponent as Close } from '../../../../assets/icons/close.svg';
import s from './Cards.module.css';

const Cards: FC = () => {
  const {
    filters,
    filteredCatalog,
    cardModal,
    cardState,
    restFilter,
    yearFilter
  } = useContext(Context);
  const { clearFilters } = useFilters();

  const isFiltersSet = Object.values(filters).flat().length
    || restFilter[0] !== RangeValues.MIN_REST || restFilter[1] !== RangeValues.MAX_REST
    || yearFilter[0] !== RangeValues.MIN_YEAR || yearFilter[1] !== RangeValues.MAX_YEAR

  return (
    <div className={s.wrapper} title="wrapper">
      <div className={s.cards__counter} title="counter">{filteredCatalog.length} <span>MODELS</span></div>
      <div className={s.cards__filters}>
        {isFiltersSet
          ? <>
            <div className={s.cards__clear} onClick={clearFilters}>
              <div className={s.clear__title}>CLEAR ALL</div>
              <Close className={s.clear__close} />
            </div>
            {Object.values(filters).flat().map((filter, index) => {
              return <div className={s.cards__filter} key={index}>{filter.toUpperCase()}</div>
            })}
          </>
          : null
        }
      </div>
      <div className={s.cards__wrapper}>
        {filteredCatalog.length
          ? filteredCatalog.map((item, index) => {
            return <CardPreview {...item} key={index} />
          })
          : <div className={s.warning}>Sorry, no matches found</div>
        }
        {cardState ? <Card {...cardModal} /> : null}
      </div>
    </div>
  )
}

export { Cards };