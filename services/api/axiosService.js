import axios from 'axios';

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.Accept = 'application/json';
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://45.94.157.55:8080/api' : 'http://45.94.157.55:8080/api';

export default axios;