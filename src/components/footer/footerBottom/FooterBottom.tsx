import { FC } from 'react';
import fondation from '../../../assets/footer/fondation.png';
import initiative from '../../../assets/footer/initiative.png';
import philantropy from '../../../assets/footer/philantropy.png';
import logo from '../../../assets/icons/rs-logo.svg';
import s from './FooterBottom.module.css';

const FooterBottom: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.images}>
        <a
          href="https://www.cartierwomensinitiative.com/?_ga=2.265379599.1471833093.1657015993-1785126791.1657015993"
          target="_blank"
          rel="noreferrer">
          <img className={s.initiative} src={initiative} alt="initiative" />
        </a>
        <a
          href="https://www.fondationcartier.com/en/?_ga=2.265379599.1471833093.1657015993-1785126791.1657015993"
          target="_blank"
          rel="noreferrer">
          <img className={s.fondation} src={fondation} alt="fondation" />
        </a>
        <a
          href="https://www.cartierphilanthropy.org/?_ga=2.265379599.1471833093.1657015993-1785126791.1657015993"
          target="_blank"
          rel="noreferrer">
          <img className={s.philantropy} src={philantropy} alt="philantropy" />
        </a>
      </div>
      <div className={s.copyright}>
        <div className={s.content}>
          <a
            href="https://github.com/ViachaslauIhnatsiuk"
            target="_blank"
            className={s.github}
            rel="noreferrer">GitHub
          </a>
          <div className={s.year}>2022</div>
          <a
            href="https://rs.school/js/"
            target="_blank"
            rel="noreferrer">
            <img className={s.logo} src={logo} alt="rolling-scopes-school logo" />
          </a>
        </div>
      </div>
    </div>
  )
}

export { FooterBottom };