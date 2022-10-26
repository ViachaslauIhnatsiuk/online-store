import { FC, useContext, useRef } from 'react';
import { Context } from '../../../../../context/context';
import { useFetchImages } from '../../../../../hooks/useFetchImages';
import { usePriceCount } from '../../../../../hooks/usePriceCount';
import { useCardModal } from '../../../../../hooks/useCardModal';
import { Warning } from './warning/Warning';
import { ICard } from '../../../../../types/Card';
import { ReactComponent as Remove } from '../../../../../assets/icons/remove.svg';
import { ReactComponent as Plus } from '../../../../../assets/icons/plus.svg';
import { ReactComponent as Minus } from '../../../../../assets/icons/minus.svg';
import close from '../../../../../assets/icons/close.svg';
import s from './Card.module.css';

const Card: FC<ICard> = ({
  title,
  shortDescription,
  price,
  fullDescription,
  amount,
  year,
}) => {
  const { bagItems } = useContext(Context);
  const { imageUrl, getImageUrls } = useFetchImages();
  const {
    bagOverflow,
    closeModal,
    addToShoppingBag,
    removeFromShoppingBag,
    decreaseBagItemCount,
    increaseBagItemCount,
    getBagItemCount,
  } = useCardModal();
  const { transformPrice } = usePriceCount();
  const cardTitle = useRef<HTMLDivElement>(null);

  getImageUrls(title);

  return (
    <div className={s.blur} onClick={closeModal} title="blur">
      <div className={s.wrapper}>
        <img
          title="close"
          className={s.close}
          src={close}
          alt="close"
          onClick={closeModal}
        />
        <img className={s.image} src={imageUrl} alt="watch" />
        <div className={s.info}>
          <div className={s.title} ref={cardTitle}>{title}</div>
          <div className={s.short__description}>{shortDescription}</div>
          <div className={s.price}>{transformPrice(price)}</div>
          <div className={s.full__description}>{fullDescription}</div>
          <div className={s.stock}>In stock: <span>{amount}</span></div>
          <div className={s.year}>Model year: <span>{year}</span></div>
          {!bagItems.find(item => item.title === title)
            ? <button className={s.add} onClick={() => addToShoppingBag(cardTitle)}>ADD TO SHOPPING BAG</button>
            : <div className={s.added__wrapper}>
              <div className={s.added}>
                <Minus className={s.minus} onClick={() => decreaseBagItemCount(title)} />
                <div className={s.count}>{getBagItemCount(title)}</div>
                <Plus className={s.plus} onClick={() => increaseBagItemCount(title, amount)} />
              </div>
              <Remove className={s.remove} onClick={() => removeFromShoppingBag(cardTitle)} />
            </div>
          }
          {bagOverflow ? <Warning /> : null}
        </div>
      </div>
    </div>
  )
}

export { Card };