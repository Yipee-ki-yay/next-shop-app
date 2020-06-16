import {
	SET_FILTERS,
	SET_SEARCH_QUERY,
} from 'redux/constants';

const setFiltersFor = prefix => {
  const setFilters = filters => {
    return {
      type: prefix + SET_FILTERS,
      payload: filters
    }
  };
  return setFilters;
};

const setSearchQueryFor = prefix => {
  const setSearchQuery = searchQuery => ({ 
		type: prefix + SET_SEARCH_QUERY, 
		payload: searchQuery 
	});
  return setSearchQuery;
};


export {
	setFiltersFor,
	setSearchQueryFor,
};
