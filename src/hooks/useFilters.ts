import { useEffect, useContext } from "react";
import { Context } from "../context/context";

function useFilters() {
  const {
    catalog,
    inputValue,
    restFilter,
    yearFilter,
    filters,
    sortValue,
    setRestFilter,
    setYearFilter,
    setFilters,
    setFilteredCatalog,
  } = useContext(Context);

  useEffect(() => {
    let filtered = catalog;
    if (filters.popularityFilter.length) filtered = filtered.filter(watch => {
      return filters.popularityFilter.find(item => Object.values(watch).includes(item))
    })
    if (filters.genderFilter.length) filtered = filtered.filter(watch => {
      return filters.genderFilter.find(item => Object.values(watch).includes(item))
    })
    if (filters.materialFilter.length) filtered = filtered.filter(watch => {
      return filters.materialFilter.find(item => Object.values(watch).includes(item))
    })
    if (filters.shapeFilter.length) filtered = filtered.filter(watch => {
      return filters.shapeFilter.find(item => Object.values(watch).includes(item))
    })
    if (filters.movementFilter.length) filtered = filtered.filter(watch => {
      return filters.movementFilter.find(item => Object.values(watch).includes(item))
    })
    if (filters.strapFilter.length) filtered = filtered.filter(watch => {
      return filters.strapFilter.find(item => Object.values(watch).includes(item))
    })
    if (restFilter.length) filtered = filtered.filter(watch => {
      return watch.amount >= restFilter[0] && watch.amount <= restFilter[1];
    })
    if (yearFilter.length) filtered = filtered.filter(watch => {
      return watch.year >= yearFilter[0] && watch.year <= yearFilter[1];
    })
    if (inputValue.length > 0) filtered = filtered.filter(watch => {
      return watch.title.toLowerCase().includes(inputValue.toLowerCase())
    })
    if (sortValue === 'NAME LOW TO HIGH') {
      filtered.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      })
    }
    if (sortValue === 'NAME HIGH TO LOW') {
      filtered.sort((a, b) => {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
        return 0;
      })
    }
    if (sortValue === 'PRICE LOW TO HIGH') filtered.sort((a, b) => a.price - b.price);
    if (sortValue === 'PRICE HIGH TO LOW') filtered.sort((a, b) => b.price - a.price);
    if (sortValue === 'YEAR LOW TO HIGH') filtered.sort((a, b) => a.year - b.year);
    if (sortValue === 'YEAR HIGH TO LOW') filtered.sort((a, b) => b.year - a.year);
    setFilteredCatalog(filtered);
  }, [catalog, sortValue, filters, restFilter, yearFilter, inputValue, setFilteredCatalog])

  return {
    filters,
    yearFilter,
    restFilter,
    addFilter(e: React.MouseEvent<HTMLElement>): void {
      const filter = (e.target as HTMLElement).id;
      const category = (e.target as HTMLElement).title;
      switch (category) {
        case 'popularity':
          if (!filters.popularityFilter.includes(filter)) {
            setFilters({ ...filters, popularityFilter: [...filters.popularityFilter, filter] });
          } else {
            const newPopularityFilter = filters.popularityFilter.filter(item => item !== filters.popularityFilter[filters.popularityFilter.indexOf(filter)]);
            setFilters({ ...filters, popularityFilter: [...newPopularityFilter] });
          }
          break
        case 'gender':
          if (!filters.genderFilter.includes(filter)) {
            setFilters({ ...filters, genderFilter: [...filters.genderFilter, filter] });
          } else {
            const newGenderFilter = filters.genderFilter.filter(item => item !== filters.genderFilter[filters.genderFilter.indexOf(filter)]);
            setFilters({ ...filters, genderFilter: [...newGenderFilter] });
          }
          break
        case 'material':
          if (!filters.materialFilter.includes(filter)) {
            setFilters({ ...filters, materialFilter: [...filters.materialFilter, filter] });
          } else {
            const newMaterialFilter = filters.materialFilter.filter(item => item !== filters.materialFilter[filters.materialFilter.indexOf(filter)]);
            setFilters({ ...filters, materialFilter: [...newMaterialFilter] });
          }
          break
        case 'shape':
          if (!filters.shapeFilter.includes(filter)) {
            setFilters({ ...filters, shapeFilter: [...filters.shapeFilter, filter] });
          } else {
            const newShapeFilter = filters.shapeFilter.filter(item => item !== filters.shapeFilter[filters.shapeFilter.indexOf(filter)]);
            setFilters({ ...filters, shapeFilter: [...newShapeFilter] });
          }
          break
        case 'movement':
          if (!filters.movementFilter.includes(filter)) {
            setFilters({ ...filters, movementFilter: [...filters.movementFilter, filter] });
          } else {
            const newMovementFilter = filters.movementFilter.filter(item => item !== filters.movementFilter[filters.movementFilter.indexOf(filter)]);
            setFilters({ ...filters, movementFilter: [...newMovementFilter] });
          }
          break
        case 'strap':
          if (!filters.strapFilter.includes(filter)) {
            setFilters({ ...filters, strapFilter: [...filters.strapFilter, filter] });
          } else {
            const newStrapFilter = filters.strapFilter.filter(item => item !== filters.strapFilter[filters.strapFilter.indexOf(filter)]);
            setFilters({ ...filters, strapFilter: [...newStrapFilter] });
          }
      }
    },
    clearFilters() {
      setFilters({
        popularityFilter: [],
        genderFilter: [],
        materialFilter: [],
        shapeFilter: [],
        movementFilter: [],
        strapFilter: [],
      });
      setYearFilter([2015, 2022]);
      setRestFilter([1, 20]);
    }
  }
};

export { useFilters };