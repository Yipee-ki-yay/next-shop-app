import { 
  OPEN_MODAL,
	CLOSE_MODAL,
} from '../../constants';

const initialModalState = {
  CLIENT_: {
    isOpenModal: false,
  },
  PRODUCT_: {
    isOpenDeleteModal: false,
    isOpenAddModal: false,
    isOpenRequestModal: false,
  },
  CATALOG_FULL_EDIT_: {
    isOpenDeleteModal: false,
    isOpenAddModal: false,
    isOpenEditModal: false,
  },
  MANAGERS_: {
    isOpenMessageModal: false,
    isOpenDeleteModal: false,
  },
};

const modalReducerFor = prefix => {
  const modalReducer = (state = initialModalState[prefix], action) => {
    switch (action.type) {

      case prefix + OPEN_MODAL: {
        return {
          ...state,
				  [action.payload]: true,
        };
      }
  
      case prefix + CLOSE_MODAL: {
        return {
          ...state,
				  [action.payload]: false,
        };
      }
  
      default:
        return state;
    }
  };
  return modalReducer;
};

export default modalReducerFor;
