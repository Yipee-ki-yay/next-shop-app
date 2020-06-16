import { setHttpToken } from 'services/api/api_helpers';
import {
	AUTH_SUCCESS,
	AUTH_CLEAR,
	AUTH_SET_USER
} from 'redux/constants';

const token = localStorage.getItem('access_token');
const user = JSON.parse(localStorage.getItem('authUser'));

const initialState = {
	authUser: !!token && !!user ? user : null,
	isAuthenticated: !!user || false,
	access_token: token || null
};

export default (state = initialState, action) => {
	switch (action.type) {

		case AUTH_SUCCESS: {
			localStorage.setItem('access_token', action.payload);
			return {
				...state,
				isAuthenticated: true,
				access_token: action.payload
			};
		}

		case AUTH_SET_USER: {			
			localStorage.setItem('authUser', JSON.stringify(action.payload));
			return { ...state, authUser: action.payload };
		}

		case AUTH_CLEAR: {
			localStorage.removeItem('authUser');
			localStorage.removeItem('access_token');
			setHttpToken(null);

			return {
				...state,
				isAuthenticated: false,
				authUser: null,
				access_token: null
			};
		}

		default:
			return state;
	}
}
