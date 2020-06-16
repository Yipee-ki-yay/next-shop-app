import { LOAD_STATUS, SAVE_STATUS } from '../../constants';

const initialStatusState = {
  itemsLoading: false,
  itemsSaving: false
};

const statusReducerFor = prefix => {
  const statusReducer = (state = initialStatusState, action) => {
    const { type, payload } = action;
    
    switch (type) {
      case prefix + LOAD_STATUS:
        return { ...state, itemsLoading: payload };

      case prefix + SAVE_STATUS:
        return { ...state, itemsSaving: payload };

      default:
        return state;
    }
  };
  return statusReducer;
};

export default statusReducerFor;
