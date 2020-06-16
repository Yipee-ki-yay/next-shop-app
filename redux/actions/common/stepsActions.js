import {
	ADD_STEP,
	DELETE_STEPS,
	SET_IS_STEP_SELECTED,
  SET_ACTIVE_STEP,
  SET_STEP_VALUE,
} from 'redux/constants';

const setAddStepFor = prefix => {
  const addStep = step => ({ 
    type: prefix + ADD_STEP, 
    payload: step 
  });
  return addStep;
}

const setDeleteStepsFor = prefix => {
  const deleteSteps = idx => ({ 
    type: prefix + DELETE_STEPS, 
    payload: idx 
  });
  return deleteSteps;
}

const setIsStepSelectedFor = prefix => {
  const setIsStepSelected = isStepSelected => ({ 
    type: prefix + SET_IS_STEP_SELECTED, 
    payload: isStepSelected 
  });
  return setIsStepSelected;
}

const setActiveStepFor = prefix => {
  const setActiveStep = idx => ({ 
    type: prefix + SET_ACTIVE_STEP, 
    payload: idx 
  });
  return setActiveStep;
}

const setStepValueFor = prefix => {
  const setStepValue = idx => ({ 
    type: prefix + SET_STEP_VALUE, 
    payload: idx 
  });
  return setStepValue;
}

export {
  setAddStepFor,
  setDeleteStepsFor,
  setIsStepSelectedFor,
  setActiveStepFor,
  setStepValueFor,
};