import { combineHeaders, checkAuthorizationHeaders, parsePayload/*, combineUrl*/ } from './api_helpers';

import axios from './axiosService';

const api = (method, url, payload ) => {
	const { headers, data, params } = parsePayload(payload);
	// checkAuthorizationHeaders();
	// console.log(params)
	return axios({
		method,
		url: url,
		headers: combineHeaders(headers),
		params: params,
		data: data
	});
};

export { api };
