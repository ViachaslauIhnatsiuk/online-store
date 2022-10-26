interface ICard {
  title: string;
  popular: string;
  amount: number;
  shortDescription: string;
  price: number;
  year: number;
  fullDescription: string;
  gender: string;
  material: string;
  shape: string;
  movement: string;
  strap: string;
  count: number;
}

interface CardProps {
  card: ICard;
  key: number;
}

export type { ICard, CardProps };