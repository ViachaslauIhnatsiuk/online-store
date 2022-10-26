import { createContext } from 'react';
import { IContext } from '../types/Context';
import { RangeValues } from '../types/RangeSlider';

const Context = createContext<IContext>({
  catalog: [],
  filteredCatalog: [],
  filters: {
    popularityFilter: [],
    genderFilter: [],
    materialFilter: [],
    shapeFilter: [],
    movementFilter: [],
    strapFilter: [],
  },
  restFilter: [RangeValues.MIN_REST, RangeValues.MAX_REST],
  yearFilter: [RangeValues.MIN_YEAR, RangeValues.MAX_YEAR],
  sortValue: '',
  inputValue: '',
  bagItems: [],
  bagState: false,
  cardState: false,
  cardModal: {
    title: '',
    popular: '',
    amount: 0,
    shortDescription: '',
    price: 0,
    year: 0,
    fullDescription: '',
    gender: '',
    material: '',
    shape: '',
    movement: '',
    strap: '',
    count: 1,
  },
  setCatalog: () => [],
  setFilteredCatalog: () => [],
  setFilters: () => { },
  setRestFilter: () => [],
  setYearFilter: () => [],
  setSortValue: () => '',
  setInputValue: () => '',
  setBagItems: () => [],
  setBagState: () => false,
  setCardState: () => false,
  setCardModal: () => { },
});

export { Context };