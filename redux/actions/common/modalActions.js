import {
	OPEN_MODAL,
	CLOSE_MODAL,
} from 'redux/constants';

const setOpenModalFor = prefix => {
  const openModal = (modalLabel) => ({ 
    type: prefix + OPEN_MODAL, 
    payload: modalLabel 
  });
  return openModal;
}

const setCloseModalFor = prefix => {
  const closeModal = (modalLabel) => ({ 
    type: prefix + CLOSE_MODAL, 
    payload: modalLabel 
  });
  return closeModal;
}

export {
  setOpenModalFor,
  setCloseModalFor,
};