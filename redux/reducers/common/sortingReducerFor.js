import { SET_SORTING } from '../../constants';

const initialSortingState = {
  orderByColumn: '',
  orderByMethod: ''
};

const sortingReducerFor = prefix => {
  const sortingReducer = (state = initialSortingState, action) => {
    const { type, payload } = action;
    switch (type) {
      case prefix + SET_SORTING:
        return { ...state, ...payload };

      default:
        return state;
    }
  };
  return sortingReducer;
};

export default sortingReducerFor;
