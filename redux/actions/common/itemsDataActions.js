import { 
  SET_META, 
  SET_ITEMS, 
  SET_ITEM,
  SET_FILTERS, 
  SET_SORTING 
} from '../../constants';

const setMetaFor = prefix => {
  const setMeta = meta => {
    // console.log(prefix, meta)
    return {
      type: prefix + SET_META,
      payload: meta
    }
  };
  return setMeta;
};

const setItemsFor = prefix => {
  const setItems = items => {
    // console.log(prefix, items)
    return {
      type: prefix + SET_ITEMS,
      payload: items
    }
  };
  return setItems;
};

const setItemFor = prefix => {
  const setItem = item => {
    // console.log(prefix, item)
    return {
      type: prefix + SET_ITEM,
      payload: item
    }
  };
  return setItem;
};

const setFiltersFor = prefix => {
  const setFilters = filters => {
    // console.log(prefix, filters)
    return {
      type: prefix + SET_FILTERS,
      payload: filters
    }
  };
  return setFilters;
};

const setSortingDataFor = prefix => {
  const setSortingData = data => {
    return {
      type: prefix + SET_SORTING,
      payload: data
    }
  };
  return setSortingData;
};

export {
  setMetaFor,
  setItemsFor,
  setItemFor,
  setFiltersFor,
  setSortingDataFor
}