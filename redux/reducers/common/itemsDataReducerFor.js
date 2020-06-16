import { 
	SET_ITEMS,
	SET_ITEM,
	SET_SORTING,
	SET_META
} from '../../constants';

const initialDataState = {
	itemsList: [],
	itemData: {},
	sortingData: {
		orderByColumn: '',
		orderByMethod: ''
	},
	itemsMeta: {
		pageable: {
			sort: {
					sorted: false,
					unsorted: true,
					empty: true
			},
			pageNumber: 0,
			pageSize: 10,
			offset: 0,
			unpaged: false,
			paged: true
		},
		totalPages: 1,
    last: false,
    totalElements: 0,
    first: true,
    sort: {
        sorted: false,
        unsorted: true,
        empty: true
    },
    numberOfElements: 10,
    size: 10,
    empty: false
	}
};

const itemsDataReducerFor = prefix => {
	const itemsDataReducer = (state = initialDataState, action) => {
		const { type, payload } = action;

		switch (type) {
			case prefix + SET_ITEMS:
				return { ...state, itemsList: [...payload] };

			case prefix + SET_ITEM:
				return { ...state, itemData: {...payload} };

			case prefix + SET_SORTING:
				return { ...state, sortingData: {...payload} };

			case prefix + SET_META:
				return { ...state, itemsMeta: {...payload} };

			default:
				return state;
		}
	};
	return itemsDataReducer;
};

export default itemsDataReducerFor;


/*case types.USERS_ADD_ITEM: {
			const newUser = action.payload;
			return { ...state, usersList: [...state.usersList, newUser] }
		}

		case types.USERS_UPDATE_ITEM: {
			const { id } = action.payload;
			const newUsersList = state.usersList.map(user =>
				user.id === id ? action.payload : user
			) 
			return { ...state, usersList: newUsersList }
		}

		case types.USERS_DELETE_ITEM: {
			const id = action.payload;
			const newUsersList = state.usersList.filter(user => user.id !== id) 
			return { ...state, usersList: newUsersList }
		}*/