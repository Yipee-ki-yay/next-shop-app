import {
  // handleError,
  isSuccessStatus,
  getResponseMessage,
} from 'services/api/api_helpers';
import { toastr } from 'react-redux-toastr';
import { push as routerPush } from 'react-router-redux';

import { api } from 'services/api';
import { clearAuth } from '../authActions';
import { setLoadingStatusFor, setSavingStatusFor } from './statusActions';
import { setMetaFor, setItemsFor } from './itemsDataActions';

const handleError = (error, { dispatch, reject=null, prefix }) => {
  try {
    const message = getResponseMessage(error);

    if (error.response) {
      if (error.response.status === 401) {
        dispatch(clearAuth());
        dispatch(routerPush('/auth/sign-in'));
        dispatch(setLoadingStatusFor(prefix)(false));
        dispatch(setSavingStatusFor(prefix)(false));
        if (reject) reject()
        toastr.error(message || 'Ваша сессия устарела', 'пожалуйста авторизируйтесь', { timeOut: 0 });
        return;
      }
    }
    if (reject) reject()
    dispatch(setLoadingStatusFor(prefix)(false));
    dispatch(setSavingStatusFor(prefix)(false));
    toastr.error('Ошибка', message || error.message, { timeOut: 0 });
  } catch(e) {console.log(e)}
};

// ---------------------------
const fetchItemsFor = (prefix, url) => {
  const fetchItems = options => {
    return dispatch => {
      dispatch(setLoadingStatusFor(prefix)(true));  
      // console.log(url, options)
      return new Promise((resolve, reject) => {
        api('GET', url, options)
          .then(response => {
            if (isSuccessStatus(response)) {
              if (!options.notSetToStore) {
                if (options.alternateSetToStore) {
                  const {dataProp} = options.alternateSetToStore;
                  dispatch(setItemsFor(prefix)(response[dataProp]));
                } else {
                  dispatch(setItemsFor(prefix)(response.data.content));
                }

                if (response.data.pageable) {
                  const { content, ...meta } = response.data;
                  dispatch(setMetaFor(prefix)(meta));
                }
              }
              // console.log(response)
              resolve(response.data)
            } else {
              reject()
              const message = getResponseMessage(response);
              toastr.error('Ошибка', message || 'неправильный формат данных ответа', {
                timeOut: 0
              });
            }
            dispatch(setLoadingStatusFor(prefix)(false));
          })
          .catch(error => {
            // console.log(error)
            dispatch(setItemsFor(prefix)([]));            
            handleError(error, {dispatch:dispatch, prefix:prefix, reject: reject});
          });
      })
    };
  };
  return fetchItems;
};

const saveItemFor = (prefix, payloadUrl) => {
  const saveItem = payload => {
    return dispatch => {
      dispatch(setSavingStatusFor(prefix)(true));  
      
      let options;
      if (payload.data.id) {
        options = {
          method: 'PUT',
          url: `${payloadUrl}/${payload.data.id}`,
          resultMessage: 'сохранен',
        }
      } else {
        options = {
          method: 'POST',
          url: payloadUrl,
          resultMessage: 'создан',
        }
      }
      const { method, url, resultMessage } = options;
      
      return new Promise((resolve, reject) => {
        api(method, url, payload)
          .then(response => {
            if (isSuccessStatus(response)) {
              toastr.success('', `Элемент ${resultMessage}`);
              resolve(response)
            } else {
              reject()
              const message = getResponseMessage(response);
              toastr.error('Ошибка', message || 'неправильный формат данных ответа', {timeOut: 0});
            }
            dispatch(setSavingStatusFor(prefix)(false));
          })
          .catch(error => {
            handleError(error, {dispatch:dispatch, prefix:prefix, reject:reject});
          });
      })
    };
  };
  return saveItem;
};

const deleteItemFor = (prefix, url) => {
  const deleteItem = id => {
    return dispatch => {
      dispatch(setSavingStatusFor(prefix)(true));  

      return new Promise((resolve, reject) => {
        api('DELETE', `${url}/${id}`)
          .then(response => {
            console.log('response', response);
            
            if (isSuccessStatus(response)) {
              toastr.success('', 'Элемент успешно удален');
            } else {
              const message = getResponseMessage(response);
              toastr.error('Ошибка', message || 'неправильный формат данных ответа', { timeOut: 0 });
            }
            if (resolve) resolve()
            dispatch(setSavingStatusFor(prefix)(false));
          })
          .catch(error => { handleError(error, {dispatch:dispatch, prefix:prefix, reject:reject}) });
      })
    }
  }
  return deleteItem
};

const commonActionFor = (prefix) => {
  const commonAction = ({ payloadUrl, payloadMethod, message, payload, settings, getParams}) => {
    return dispatch => {
      if (settings && settings.silent) {
        //---
      } else {
        dispatch(setSavingStatusFor(prefix)(true));
      }
      
      let options = {
        method: payloadMethod,
        url: payloadUrl,
        resultMessage: message || 'выполнено',
        // getParams: getParams
      };

      const { method, url, resultMessage } = options;
      
      return new Promise((resolve, reject) => {
        api(method, url, payload)
          .then(response => {
            if (isSuccessStatus(response)) {
              resolve(response)
              if (settings && settings.messageDisabled) {
                // none
              } else {
                toastr.success('', `Элемент ${resultMessage}`);                
              }
            } else {
              reject()
              const message = getResponseMessage(response);
              toastr.error('Ошибка', message || 'неправильный формат данных ответа', {timeOut: 0});
            }
            dispatch(setSavingStatusFor(prefix)(false));
          })
          .catch(error => {
            handleError(error, {dispatch:dispatch, prefix:prefix, reject:reject});
          });
      })
    };
  };
  return commonAction;
};

export {
  fetchItemsFor,
  saveItemFor,
  deleteItemFor,
  handleError,
  commonActionFor
}