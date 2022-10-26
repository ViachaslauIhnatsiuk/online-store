import { useContext } from "react";
import { Context } from "../context/context";

function usePriceCount() {
  const { bagItems } = useContext(Context);
  const fourDigitsNumber = 4;
  const fiveDigitsNumber = 5;
  const sixDigitsNumber = 6;

  return {
    transformPrice(price: number): string {
      const stringPrice = String(price);
      if (stringPrice.length < fourDigitsNumber) {
        return '$0.00';
      } else if (stringPrice.length === fourDigitsNumber) {
        return `$${stringPrice.slice(0, 1)},${stringPrice.slice(1)}.00`;
      } else if (stringPrice.length === fiveDigitsNumber) {
        return `$${stringPrice.slice(0, 2)},${stringPrice.slice(2)}.00`;
      }
      return `$${stringPrice.slice(0, 3)},${stringPrice.slice(3)}.00`;
    },
    countBagPrices(): string {
      const prices = bagItems.map(item => item.price * item.count);
      const total = String(prices.reduce((a, b) => a + b, 0));
      if (total.length < fourDigitsNumber) {
        return `$0.00`;
      } else if (total.length === fourDigitsNumber) {
        return `$${total.slice(0, 1)},${total.slice(1)}.00`;
      } else if (total.length === fiveDigitsNumber) {
        return `$${total.slice(0, 2)},${total.slice(2)}.00`;
      } else if (total.length === sixDigitsNumber) {
        return `$${total.slice(0, 3)},${total.slice(3)}.00`;
      } else {
        return `$${total.slice(0, 1)},${total.slice(1, 4)},${total.slice(4)}.00`;
      }
    }
  }
};

export { usePriceCount };