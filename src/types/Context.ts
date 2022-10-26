import { Dispatch, SetStateAction } from 'react';
import { Filters } from '../types/Filters';
import { ICard } from '../types/Card';

interface IContext {
  catalog: ICard[];
  filteredCatalog: ICard[];
  filters: Filters;
  restFilter: number[];
  yearFilter: number[];
  sortValue: string;
  inputValue: string;
  bagItems: ICard[];
  bagState: boolean;
  cardState: boolean;
  cardModal: ICard;
  setCatalog: Dispatch<SetStateAction<ICard[]>>;
  setFilteredCatalog: Dispatch<SetStateAction<ICard[]>>;
  setFilters: Dispatch<SetStateAction<Filters>>;
  setRestFilter: Dispatch<SetStateAction<number[]>>;
  setYearFilter: Dispatch<SetStateAction<number[]>>;
  setSortValue: Dispatch<SetStateAction<string>>;
  setInputValue: Dispatch<SetStateAction<string>>;
  setBagItems: Dispatch<SetStateAction<ICard[]>>;
  setBagState: Dispatch<SetStateAction<boolean>>;
  setCardState: Dispatch<SetStateAction<boolean>>;
  setCardModal: Dispatch<SetStateAction<ICard>>;
}

export type { IContext };