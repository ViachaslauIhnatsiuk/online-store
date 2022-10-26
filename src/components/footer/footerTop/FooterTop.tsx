import { FC } from 'react';
import { ReactComponent as Instagram } from '../../../assets/icons/social/instagram.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/social/facebook.svg';
import { ReactComponent as Twitter } from '../../../assets/icons/social/twitter.svg';
import { ReactComponent as Youtube } from '../../../assets/icons/social/youtube.svg';
import { ReactComponent as Pinterest } from '../../../assets/icons/social/pinterest.svg';
import s from './FooterTop.module.css';

const SECTIONS = {
  CUSTOMER_CARE: ['CONTACT US', 'CALL NOW: 800 227 8437', 'FAQ', 'CHECK ORDER', 'BOOK AN APPOINTMENT'],
  OUR_COMPANY: ['FIND A BOUTIQUE', 'CAREERS'],
  LEGAL_AREA: ['TERMS OF USE', 'PRIVACY POLICY', 'CONDITIONS OF SALE', 'CONDITIONS OF SALES PAY-BY-LINK'],
};

const FooterTop: FC = () => {
  return (
    <div className={s.wrapper} data-testid='footer-top'>
      {Object.keys(SECTIONS).map((title, index) => {
        return (
          <div className={s.column} key={index}>
            <div className={s.title}>{title.replace('_', ' ')}</div>
            <div className={s.links}>
              {Object.values(SECTIONS)[index].map((link, index) => {
                return <div className={s.link} key={index}>{link}</div>
              })}
            </div>
          </div>
        )
      })}
      <div className={s.column} data-testid='social'>
        <div className={s.title}>FOLLOW US</div>
        <div className={s.social__links}>
          <a
            href="https://www.instagram.com/cartier/"
            target="_blank"
            rel="noreferrer">
            <Instagram className={s.icon} />
          </a>
          <a
            href="https://www.facebook.com/cartier.ae"
            target="_blank"
            rel="noreferrer">
            <Facebook className={s.icon} />
          </a>
          <a
            href="https://twitter.com/cartier"
            target="_blank"
            rel="noreferrer">
            <Twitter className={s.icon} />
          </a>
          <a
            href="https://www.youtube.com/cartier"
            target="_blank"
            rel="noreferrer">
            <Youtube className={s.icon} />
          </a>
          <a
            href="https://www.pinterest.com/cartier/"
            target="_blank"
            rel="noreferrer">
            <Pinterest className={s.icon} />
          </a>
        </div>
      </div>
    </div>
  )
}

export { FooterTop };