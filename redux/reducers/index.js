import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

// import { reducer as toastrReducer } from 'react-redux-toastr';

// import auth from './authReducers';
// import clientsReducers from './clientsReducers';
// import clientReducers from './clientReducers';
// import clientAddCarReducers from './clientAddCarReducers';
// import clientCarPartsReducers from './clientCarPartsReducers';
// import catalogReducers from './catalogReducers';
// import catalogFullReducers from './catalogFullReducers';
// import catalogFullAddGroupReducers from './catalogFullAddGroupReducers';
// import catalogFullEditReducers from './catalogFullEditReducers';
// import catalogAddReducers from './catalogAddReducers';
import managersReducers from './managersReducers';
import counterReducer from './counterReducer';
// import productReducers from './productReducers';
// import productEditReducers from './productEditReducers';

export default combineReducers({
	// routing: routerReducer,
	// toastr: toastrReducer,
	// auth,
	// clients: clientsReducers,
	// client: clientReducers,
	// clientAddCar: clientAddCarReducers,
	// clientCarParts: clientCarPartsReducers,
	// catalog: catalogReducers,
	// catalogFull: catalogFullReducers,
	// catalogFullAddGroup: catalogFullAddGroupReducers,
	// catalogFullEdit: catalogFullEditReducers,
	// catalogAdd: catalogAddReducers,
	managers: managersReducers,
	counter: counterReducer,
	// product: productReducers,
	// productEdit: productEditReducers,
});
