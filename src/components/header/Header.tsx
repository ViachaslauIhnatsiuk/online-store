import { FC, useState, useContext } from 'react';
import { Context } from '../../context/context';
import { ShoppingBag } from './shoppingBag/ShoppingBag';
import logo from '../../assets/logo.png';
import pin from '../../assets/icons/pin.svg';
import account from '../../assets/icons/account.svg';
import cart from '../../assets/icons/cart.svg';
import wishlist from '../../assets/icons/wishlist.svg';
import search from '../../assets/icons/search.svg';
import close from '../../assets/icons/close.svg';
import s from './Header.module.css';

const Header: FC = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const {
    inputValue,
    bagState,
    bagItems,
    setInputValue,
    setBagState,
  } = useContext(Context);

  const openBag = (): void => {
    setBagState(!bagState);
    document.body.style.overflowY = 'hidden';
  }

  const clearInput = (): void => {
    setInputValue('');
    setFocused(false);
  }

  const countTotalProductsNumber = (): number => {
    return bagItems.map(item => item.count).reduce((a, b) => a + b);
  }

  return (
    <>
      <div className={s.header}>
        <div className={s.header__left}>
          <div className={s.header__contact}>CONTUCT US</div>
          <div className={s.header__service}>SERVICES</div>
        </div>
        <div className={s.header__center}>
          <img className={s.logo} src={logo} alt="logo" />
          <div className={s.search}>
            <input
              autoFocus
              className={s.input}
              type="text"
              onChange={e => setInputValue(e.target.value)}
              value={inputValue}
              onFocus={() => setFocused(true)}
              onBlur={() => !inputValue ? setFocused(false) : null}
              placeholder='Search products'
            />
            {focused
              ? <img className={s.search__icon} src={close} alt="close" title="close" onClick={clearInput} />
              : <img className={s.search__icon} src={search} alt="search" title="search" />
            }
          </div>
        </div>
        <div className={s.header__right}>
          <img className={s.wishlist} src={wishlist} alt="wishlist" />
          <img className={s.account} src={account} alt="account" />
          <a className={s.pin_link}
            href="https://stores.cartier.com/en_us/search?category=storeLocatorSearch&_ga=2.11141235.690935726.1657394548-1785126791.1657015993"
            target="_blank"
            rel="noreferrer"
          >
            <img className={s.pin} src={pin} alt="pin" />
          </a>
          <div className={s.cart__wrapper}>
            <img
              className={s.cart}
              src={cart}
              alt="cart"
              onClick={openBag}
            />
            {bagItems.length
              ? <div className={s.cart__counter} onClick={openBag}>{countTotalProductsNumber()}</div>
              : null}
          </div>
        </div>
      </div>
      <ShoppingBag />
    </>
  )
}

export { Header };