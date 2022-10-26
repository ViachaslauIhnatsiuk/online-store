import { FC, useEffect, useState } from 'react';
import { Context } from '../context/context';
import { useFetchData } from '../hooks/useFetchData';
import { Filters } from '../types/Filters';
import { RangeValues } from '../types/RangeSlider';
import { ICard } from '../types/Card';
import { Header } from './header/Header';
import { MainTop } from './main/mainTop/MainTop';
import { MainBottom } from './main/mainBottom/MainBottom';
import { Footer } from './footer/Footer';
import s from './App.module.css';

const App: FC = () => {
  const { catalog, setCatalog } = useFetchData();
  const [filteredCatalog, setFilteredCatalog] = useState<ICard[]>([]);
  const [filters, setFilters] = useState<Filters>({
    popularityFilter: [],
    genderFilter: [],
    materialFilter: [],
    shapeFilter: [],
    movementFilter: [],
    strapFilter: [],
  });
  const [restFilter, setRestFilter] = useState<number[]>([RangeValues.MIN_REST, RangeValues.MAX_REST]);
  const [yearFilter, setYearFilter] = useState<number[]>([RangeValues.MIN_YEAR, RangeValues.MAX_YEAR]);
  const [sortValue, setSortValue] = useState<string>('PRICE LOW TO HIGH');
  const [inputValue, setInputValue] = useState<string>('');
  const [bagItems, setBagItems] = useState<ICard[]>([])
  const [bagState, setBagState] = useState<boolean>(false);
  const [cardState, setCardState] = useState<boolean>(false);
  const [cardModal, setCardModal] = useState<ICard>({
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
  })

  useEffect(() => {
    const storageFilters = JSON.parse(localStorage.getItem('filters') as string
      || '{"popularityFilter":[],"genderFilter":[],"materialFilter":[],"shapeFilter":[],"movementFilter":[],"strapFilter":[]}');
    setFilters(storageFilters);
    const storageBagItems = JSON.parse(localStorage.getItem('bagItems') as string) || [];
    if (storageBagItems.length) setBagItems(storageBagItems);
    const storageRestFilter = JSON.parse(localStorage.getItem('restFilter') as string) || [];
    if (storageRestFilter.length) setRestFilter(storageRestFilter);
    const storageYearFilter = JSON.parse(localStorage.getItem('yearFilter') as string) || [];
    if (storageYearFilter.length) setYearFilter(storageYearFilter);
    const storageSortValue = JSON.parse(localStorage.getItem('sortValue') as string) || 'PRICE LOW TO HIGH';
    setSortValue(storageSortValue);
  }, [])

  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(filters));
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    localStorage.setItem('restFilter', JSON.stringify(restFilter));
    localStorage.setItem('yearFilter', JSON.stringify(yearFilter));
    localStorage.setItem('sortValue', JSON.stringify(sortValue));
  }, [filters, bagItems, restFilter, yearFilter, sortValue])

  return (
    <Context.Provider value={{
      catalog,
      filteredCatalog,
      filters,
      restFilter,
      yearFilter,
      sortValue,
      inputValue,
      bagItems,
      bagState,
      cardState,
      cardModal,
      setCatalog,
      setFilteredCatalog,
      setFilters,
      setRestFilter,
      setYearFilter,
      setSortValue,
      setInputValue,
      setBagItems,
      setBagState,
      setCardState,
      setCardModal,
    }
    }>
      <div className={s.app}>
        <Header />
        <MainTop />
        <MainBottom />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export { App };