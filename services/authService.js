// -------Middleware Exaple------
// saveAuthData = store => next => action => {
const saveAuthData = () => next => action => {
	if (action.type === 'SET_AUTH_TO_STORE') {
		/* if (action.payload) {
		} */
	}
	return next(action);
};

export default saveAuthData;
