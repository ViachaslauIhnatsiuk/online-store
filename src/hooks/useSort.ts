import { useContext, useState, } from "react";
import { Context } from "../context/context";

function useSort() {
  const { sortValue, setSortValue } = useContext(Context);
  const [sortState, setSortState] = useState<boolean>(false);

  return {
    sortState,
    sortValue,
    sortCards(e: React.MouseEvent<HTMLElement>): void {
      if ((e.target as HTMLElement).title !== 'option') {
        const sortOption = (e.target as HTMLElement).textContent as string;
        const currentOption = e.currentTarget.firstElementChild as HTMLElement;
        currentOption.textContent = sortOption;
        setSortValue(sortOption);
      }
      setSortState(!sortState);
    }
  }
};

export { useSort };