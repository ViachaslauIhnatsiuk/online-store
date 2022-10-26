import { useState, useContext, MouseEvent, RefObject } from 'react';
import { Context } from '../context/context';

function useCardModal() {
  const [bagOverflow, setBagOverflow] = useState<boolean>(false);
  const {
    catalog,
    cardModal,
    cardState,
    bagItems,
    setCardState,
    setBagItems,
  } = useContext(Context);

  return {
    bagOverflow,
    setBagOverflow,
    closeModal(e: MouseEvent<HTMLElement>) {
      if ((e.target as HTMLDivElement).hasAttribute('title')) {
        setCardState(!cardState);
        document.body.style.overflowY = 'auto';
      }
    },
    addToShoppingBag(ref: RefObject<HTMLElement>): void {
      const totalProductsNumber = bagItems.map(item => item.count).reduce((a, b) => a + b, 0);
      if (totalProductsNumber < 20) {
        const [foundItem] = catalog.filter(item => item.title === ref.current?.textContent);
        const addToBagItem = { ...foundItem, count: 1 };
        setBagItems([...bagItems, addToBagItem]);
      } else {
        setBagOverflow(true);
      }
    },
    removeFromShoppingBag(ref: RefObject<HTMLElement>): void {
      const newBagItems = bagItems.filter(item => item.title !== ref.current?.textContent);
      setBagItems(newBagItems);
      setBagOverflow(false);
    },
    increaseBagItemCount(title: string, amount: number): void {
      const totalProductsNumber = bagItems.map(item => item.count).reduce((a, b) => a + b, 0);
      const [foundBagItem] = bagItems.filter(item => item.title === title);
      const newItemCount = foundBagItem.count + 1;
      if (newItemCount <= amount && totalProductsNumber < 20) {
        const changedBagItem = { ...foundBagItem, count: newItemCount };
        const foundBagItemIndex = bagItems.indexOf(foundBagItem);
        const newBagItems = bagItems.map((item, index) => index === foundBagItemIndex ? changedBagItem : item);
        setBagItems(newBagItems);
      }
      if (totalProductsNumber >= 20) {
        setBagOverflow(true);
      }
    },
    decreaseBagItemCount(title: string): void {
      setBagOverflow(false);
      const [foundBagItem] = bagItems.filter(item => item.title === title);
      const newItemCount = foundBagItem.count - 1;
      if (newItemCount >= 1) {
        const changedBagItem = { ...foundBagItem, count: newItemCount };
        const foundBagItemIndex = bagItems.indexOf(foundBagItem);
        const newBagItems = bagItems.map((item, index) => index === foundBagItemIndex ? changedBagItem : item);
        setBagItems(newBagItems);
      }
    },
    getBagItemCount(title: string): number {
      const foundBagItem = bagItems.find(item => item.title === title) || cardModal;
      return foundBagItem?.count as number;
    }
  }
};

export { useCardModal };