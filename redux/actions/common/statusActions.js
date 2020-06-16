import { LOAD_STATUS, SAVE_STATUS } from '../../constants';

const setLoadingStatusFor = prefix => {
  const setLoadingStatus = isLoading => {
    // console.log(prefix, isLoading)
    return {
      type: prefix + LOAD_STATUS,
      payload: isLoading
    }
  };
  return setLoadingStatus;
};

const setSavingStatusFor = prefix => {
  const setSavingStatus = isSaving => {
    return {
      type: prefix + SAVE_STATUS,
      payload: isSaving
    }
  };
  return setSavingStatus;
};

export {
  setLoadingStatusFor,
  setSavingStatusFor
}