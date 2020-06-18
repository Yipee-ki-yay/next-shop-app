import store from 'redux/store';
import isEmpty from 'lodash.isempty';
// import { push as routerPush } from 'react-router-redux';
// import { clearAuth } from 'redux/actions/authActions';
import { toastr } from 'react-redux-toastr';
import axios from './axiosService';

const combineHeaders = headers => {
	if (headers) return headers;

	return headers;
	// headers = {'Content-Type': 'multipart/form-data'}
};

const setHttpToken = token => {
	if (token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	} else {
		axios.defaults.headers.common.Authorization = null;
	}
	// console.log('2: ',axios.defaults.headers.common.Authorization)
};

const checkAuthorizationHeaders = () => {
	// console.log('1: ',axios.defaults.headers.common.Authorization)
	if (!!axios.defaults.headers.common && !!axios.defaults.headers.common.Authorization) {
		// empty
	} else {
		const token = store.getState().auth.authData.access_token;
		setHttpToken(token);
	}
};

/*const toUrl = obj => {
	// const str = [];
	// console.log('obj:', obj)
	// for (const p in obj) {
	// 	// if (obj.hasOwnProperty(p) && obj[p]) {
	// 	if (Object.prototype.hasOwnProperty.call(obj, p) && obj[p]) {
	// 		if (p === 'before' || p === 'after') {
	// 			str.push(`${encodeURIComponent(p)}=${obj[p]}`);
	// 		} else {
	// 			str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
	// 		}
	// 	}
	// }
	// return str.join('&');
	return obj
};*/
const prepareParams = getParams => {
	let result = {};
	for (let prop in getParams) {
		if (
			getParams[prop] 
			|| typeof getParams[prop] === 'boolean'
			|| typeof getParams[prop] === 'number'
		) {
			result[prop] = getParams[prop];
		}
	}

	return result;
}


const parsePayload = payloadData => {
	const result = {};
	if (payloadData) {
		const payload = { ...payloadData };

		if (!isEmpty(payload)) {
			if (payload.getParams) result.params = prepareParams(payload.getParams);
			if (payload.data) result.data = payload.data;
		}
	}
	return result;
};

const combineUrl = (initialUrl, params) => {
	let url = initialUrl;
	if (params) {
		// if (params.itemId) url = `${url}/${params.itemId}`;
		// const getParams = toUrl(params);
		const getParams = params;
		url = getParams ? `${url}?${getParams}` : url;
	}
	// console.log(url)
	return url;
};

const isSuccessStatus = response => {
	if (response.status >= 200 && response.status < 300) {
		// if (response.data) {
		// 	return true;
		// } else if (response.data && response.status) {
		// 	return true;
		// }
		return true;
	}
	return false;
};

const getResponseMessage = originalResponse => {
	let message = '';

	if (originalResponse) {
		const response = originalResponse.data ? originalResponse.data : originalResponse.response;

		if (response && response.data) {
			const { messages } = response.data;

			if (messages instanceof Array) {
				for (let i = 0; i < messages.length; i++) {
					for (let j = 0; j < messages[i].length; j++) {
						const comma = j === messages[i].length - 1 ? '.' : ', ';
						message += `${messages[i][j]}${comma}`;
					}
				}
			}
		}
	}

	return message;
};

const handleGetItemsResponse = (response, { dispatch, types, payload, resolve=null }) => {
	// console.log('handleResponse',response)
	if (isSuccessStatus(response)) {
		dispatch({
			type: types.itemsAction,
			payload: response.data.data
		});

		if (response.data.meta) {
			dispatch({
				type: types.setMeta,
				payload: response.data.meta
			});
		}	
	} else {
		const message = getResponseMessage(response);
		toastr.error('Ошибка', message || 'неправильный формат данных ответа', {
			timeOut: 0
		});
	}
	dispatch({ type: types.statusEnd, payload: false });
};

const handleRemoveItemsResponse = (response, { dispatch, types, payload, resolve=null, id }) => {
	try {
	 	if (isSuccessStatus(response)) {
			// console.log('handleResponse',types.itemsAction, id)
			// dispatch({ type: types.itemsAction, payload: id	});
			toastr.success('', 'Элемент успешно удален');
		} else {
			const message = getResponseMessage(response);
			toastr.error('Ошибка', message || 'неправильный формат данных ответа', {
				timeOut: 0
			});
		}
		if (resolve) resolve()
		dispatch({ type: types.statusEnd, payload: false });
	} catch (e) {console.log(e)}
};

/*const handleError = (error, { dispatch, types, payload, reject=null }) => {
	const message = getResponseMessage(error);

	if (error.response) {
		if (error.response.status === 401) {
			dispatch(clearAuth());
			dispatch(routerPush('/auth/sign-in'));
			dispatch({ type: types.statusEnd });
			toastr.error(message || 'Ваша сессия устарела', 'пожалуйста авторизуйтесь', { timeOut: 0 });
			return;
		}
	}
	if (reject) reject()
		// console.log(types.statusEnd)
	dispatch({ type: types.statusEnd, payload: false });
	toastr.error('Ошибка', message || error.message, { timeOut: 0 });
};*/


export {
	checkAuthorizationHeaders,
	combineHeaders,
	setHttpToken,
	// toUrl,
	parsePayload,
	combineUrl,
	// handleError,
	handleGetItemsResponse,
	getResponseMessage,
	isSuccessStatus,
	handleRemoveItemsResponse,
};
