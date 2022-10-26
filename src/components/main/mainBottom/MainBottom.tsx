import { FC } from 'react';
import { SortBar } from './sortBar/SortBar';
import { Cards } from './cards/Cards';
import s from './MainBottom.module.css';

const MainBottom: FC = () => {
  return (
    <div className={s.wrapper}>
      <SortBar />
      <Cards />
    </div>
  )
}

export { MainBottom };