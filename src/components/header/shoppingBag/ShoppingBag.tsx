import { FC, useContext } from 'react';
import { Context } from '../../../context/context';
import { usePriceCount } from '../../../hooks/usePriceCount';
import { ShoppingBagCard } from './shoppingBagCard/ShoppingBagCard';
import close from '../../../assets/icons/close.svg';
import s from './ShoppingBag.module.css';

const ShoppingBag: FC = () => {
  const {
    bagState,
    bagItems,
    setBagState
  } = useContext(Context);
  const { countBagPrices } = usePriceCount();

  const closeBag: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if ((e.target as HTMLDivElement).title === 'blur') {
      setBagState(!bagState);
      document.body.style.overflowY = 'auto';
    }
  }

  return (
    <div className={bagState ? s.blur : null} onClick={closeBag} title="blur">
      <div className={bagState ? s.wrapper : s.wrapper__off}>
        <div className={s.header}>
          <div className={s.title}>Shopping Bag</div>
          <img
            title="blur"
            className={s.close}
            src={close}
            alt="close"
            onClick={closeBag}
          />
        </div>
        <div className={s.main}>
          {bagItems.length
            ? bagItems.map((item, index) => {
              return <ShoppingBagCard {...item} key={index} />
            })
            : <div className={s.warning}>Your shopping bag is empty</div>
          }
        </div>
        <div className={s.footer}>
          <div className={s.subtotal}>
            <div className={s.subtotal__title}>SUBTOTAL</div>
            <div className={s.subtotal__price}>{countBagPrices()}</div>
          </div>
          <div className={s.taxes}>Shipping and taxes calculated at checkout.</div>
          <button className={s.proceed}>PROCEED TO CHECHOUT</button>
        </div>
      </div>
    </div>
  )
}

export { ShoppingBag };