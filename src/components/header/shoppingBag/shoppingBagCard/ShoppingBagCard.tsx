import { FC, useContext, useRef } from 'react';
import { Context } from '../../../../context/context';
import { useFetchImages } from '../../../../hooks/useFetchImages';
import { usePriceCount } from '../../../../hooks/usePriceCount';
import { useCardModal } from '../../../../hooks/useCardModal';
import { ICard } from '../../../../types/Card';
import close from '../../../../assets/icons/close.svg';
import s from './ShoppingBagCard.module.css';

const ShoppingBagCard: FC<ICard> = ({
  title,
  shortDescription,
  price,
}) => {
  const { bagItems, setBagItems } = useContext(Context);
  const { imageUrl, getImageUrls } = useFetchImages();
  const { transformPrice } = usePriceCount();
  const { getBagItemCount } = useCardModal();
  const cardTitle = useRef<HTMLDivElement>(null);

  getImageUrls(title);

  const removeFromShoppingBag = (): void => {
    const newBagItems = bagItems.filter(item => item.title !== cardTitle.current?.textContent);
    setBagItems(newBagItems);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.count}>{getBagItemCount(title)}</div>
      <div>X</div>
      <img
        className={s.close__icon}
        src={close}
        alt="close"
        onClick={removeFromShoppingBag}
      />
      <img className={s.image} src={imageUrl} alt="watch" />
      <div className={s.content}>
        <div className={s.title} ref={cardTitle}>{title}</div>
        <div className={s.description}>{shortDescription}</div>
        <div className={s.price}>{transformPrice(price)}</div>
      </div>
    </div>
  )
}

export { ShoppingBagCard };