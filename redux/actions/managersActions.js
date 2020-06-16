// import { setLoadingStatusFor, setSavingStatusFor } from './statusActions';
import { fetchItemsFor, saveItemFor, deleteItemFor } from './common/apiActions';
import { setItemsFor, setItemFor, setMetaFor, setFiltersFor, setSortingDataFor } from './common/itemsDataActions';
// import store from 'redux/store';

// import { LOAD_STATUS, SAVE_STATUS } from '../constants';

// const setManagersLoadStatus = setLoadingStatusFor('MANAGERS_');
// const setManagersSaveStatus = setSavingStatusFor('MANAGERS_');

const fetchManagers = payload => {
	return fetchItemsFor('MANAGERS_', '/manager/list')(payload);
};

const saveManager = payload => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			dispatch(saveItemFor('MANAGERS_', '/manager/create')(payload))
				.then((response) => {
					resolve()
				})
				.catch(() => {reject()})
		})
	}
};

const deleteManager = id => {
	return deleteItemFor('MANAGERS_', '/manager')(id);	
}

const setManagers = managers => {
	return setItemsFor('MANAGERS_')(managers);
};

const setManager = manager => {
	return setItemFor('MANAGERS_')(manager);
};

const setManagersFilters = filters => {
	// console.log(filters)
	return setFiltersFor('MANAGERS_')(filters);
};

const setManagersMeta = meta => {
	return setMetaFor('MANAGERS_')(meta);
};

const setManagersSorting = data => {
	return setSortingDataFor('MANAGERS_')(data);
};

export {
	fetchManagers,
	saveManager,
	deleteManager,
	setManagers,
	setManager,
	setManagersFilters,
	setManagersMeta,
	setManagersSorting
}
