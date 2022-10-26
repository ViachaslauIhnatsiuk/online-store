import { FC, useContext, useEffect, memo } from 'react';
import { Context } from '../../../../../context/context';
import { useFetchImages } from '../../../../../hooks/useFetchImages';
import { usePriceCount } from '../../../../../hooks/usePriceCount';
import { ICard } from '../../../../../types/Card';
import { ReactComponent as Cart } from '../../../../../assets/icons/cart.svg';
import s from './CardPreview.module.css';

const CardPreview: FC<ICard> = memo((props) => {
  const { cardState, bagItems, setCardState, setCardModal } = useContext(Context);
  const { transformPrice } = usePriceCount();
  const { imageUrl, getImageUrls } = useFetchImages();
  const {
    title,
    shortDescription,
    price,
  } = props;

  useEffect(() => {
    getImageUrls(title);
  }, [getImageUrls, title])

  const openCard = (): void => {
    setCardState(!cardState);
    setCardModal(props);
    document.body.style.overflowY = 'hidden';
  }

  return (
    <div className={s.wrapper} onClick={openCard}>
      <img className={s.image} src={imageUrl} alt="watch" />
      <div className={s.title}>{title}</div>
      <div className={s.description}>{shortDescription}</div>
      <div className={s.price}>{transformPrice(price)}</div>
      {bagItems.find(item => item.title === title)
        ? <Cart className={s.cart} />
        : null}
    </div>
  )
})

export { CardPreview };