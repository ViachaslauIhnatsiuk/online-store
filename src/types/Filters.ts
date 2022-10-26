interface Filters {
  [key: string]: string[];
}
interface ISortBarFilter {
  title: string;
  id: string;
  filter: string;
  addFilter: (e: React.MouseEvent<HTMLElement>) => void;
}

export type {
  Filters,
  ISortBarFilter,
};