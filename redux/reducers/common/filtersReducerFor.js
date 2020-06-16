import { SET_FILTERS, SET_SEARCH_QUERY } from '../../constants';

// console.log('red')
const commonFilters = {
	searchQuery: '',
	// max: {value: 10, label: '10'},
	page: 0,
	size: 10,
};

const initialFiltersState = {
	CLIENT_ADD_CAR_: { ...commonFilters },
	CLIENT_CAR_PARTS_: { ...commonFilters },
	CLIENTS_: { ...commonFilters },
	CATALOG_: { ...commonFilters },
	CATALOG_FULL_: { ...commonFilters },
	CATALOG_ADD_MANUFACTURER_: { ...commonFilters },
	CATALOG_ADD_MODEL_: { ...commonFilters },
	CATALOG_ADD_MODIFICATION_: { ...commonFilters },
	MANAGERS_: { ...commonFilters },
};

const filtersReducerFor = prefix => {
	const filtersReducer = (state = initialFiltersState[prefix], action) => {
		const { type, payload } = action;

		switch (type) {
			case prefix + SET_FILTERS:
				return { ...state, ...payload };

			case prefix + SET_SEARCH_QUERY: {
				return {
					...state,
					searchQuery: payload,
				};
			}

			default:
				return state;
		}
	};
	return filtersReducer;
};

export default filtersReducerFor;
