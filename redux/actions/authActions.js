import { setLoadingStatusFor/*, setSavingStatusFor*/ } from './common/statusActions';
import { handleError } from './common/apiActions';

import {
	AUTH_SUCCESS,
	AUTH_CLEAR,
	AUTH_SET_USER
} from 'redux/constants';

import { api } from 'services/api';
import { getResponseMessage, isSuccessStatus } from 'services/api/api_helpers';
import { push as routerPush } from 'react-router-redux';
import { toastr } from 'react-redux-toastr';

const fetchAuthUser = () => {
	return dispatch => {
		dispatch(setLoadingStatusFor('AUTH_')(true));

		return new Promise((resolve, reject) => {
			api('GET', '/auth/user')
				.then(response => {
					if (isSuccessStatus(response)) {
						dispatch(setLoadingStatusFor('AUTH_')(false));
						resolve();
					};
				})
				.catch(error => {
					handleError(error, {dispatch:dispatch, prefix:'AUTH_', reject:reject});
				})
		});
	};
};

const signIn = payload => {
	return dispatch => {
		// dispatch({ type: AUTH_REQUEST_START });
		dispatch(setLoadingStatusFor('AUTH_')(true));  

		api('POST', '/auth/login', payload)
			.then(response => {
				console.log('ressp', response);
				
				if (isSuccessStatus(response)) {
					if (response.data.token) {
						const { token } = response.data;
						const user = response.data;
						try {
							dispatch({ type: AUTH_SET_USER, payload: user });
							dispatch({ type: AUTH_SUCCESS, payload: token });
							dispatch(setLoadingStatusFor('AUTH_')(false));  
						} catch(e) {console.log(e)}

						dispatch(routerPush('/'));
						toastr.success('', `Вы вошли как ${user.login}`);
					} else {
						dispatch({ type: AUTH_CLEAR });
						dispatch(setLoadingStatusFor('AUTH_')(false));
						const message = getResponseMessage(response);
						toastr.error('Ошибка', message || 'ответ не содержит данных', { timeOut: 0 });
					}
				} else {
					const message = getResponseMessage(response);
					toastr.error('Ошибка', message || 'неправильный статус ответа', { timeOut: 0 });
				}
			})
			.catch(error => {
				dispatch({ type: AUTH_CLEAR });
				dispatch(setLoadingStatusFor('AUTH_')(false));
				const message = getResponseMessage(error);
				toastr.error('Ошибка', message || error.message);
			});
	};
};

const signOut = () => {
	return dispatch => {
		dispatch(setLoadingStatusFor('AUTH_')(true));
		// dispatch({ type: AUTH_REQUEST_START });
		dispatch({ type: AUTH_CLEAR });
		setTimeout(() => {
			dispatch(setLoadingStatusFor('AUTH_')(false));  
			// dispatch({ type: AUTH_REQUEST_END });
		}, 100);
		toastr.success('', 'Вы успешно вышли из аккаунта');
	};
};

const setAuthUser = user => {
	// console.log(user)
	return { type: AUTH_SET_USER, payload: user };
};
const clearAuth = () => {
	return { type: AUTH_CLEAR };
};

export {
	fetchAuthUser,
	signIn,
	signOut,
	setAuthUser,
	clearAuth
}
