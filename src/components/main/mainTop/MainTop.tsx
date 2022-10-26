import { FC } from 'react';
import about from '../../../assets/about.webp';
import s from './MainTop.module.css';

const MainTop: FC = () => {
  return (
    <div className={s.wrapper} title="wrapper">
      <img className={s.about} src={about} alt="about" />
      <div className={s.description}>
        <div className={s.title} title="title">ALL WATCH COLLECTIONS</div>
        <div className={s.text} title="text">From the timeless Santos to the ethereal Ballon Bleu to the exquisite Maillon, Cartier has created a plethora of original fine watches over the years. Discover the exceptional timepieces that stand for elegance, beauty, and precision.</div>
      </div>
    </div>
  )
}

export { MainTop };