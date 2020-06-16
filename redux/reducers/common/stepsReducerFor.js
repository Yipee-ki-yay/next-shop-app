import { 
  ADD_STEP,
	DELETE_STEPS,
	SET_IS_STEP_SELECTED,
  SET_ACTIVE_STEP,
  SET_STEP_VALUE,
  CLIENT_ADD_CAR_,
  CATALOG_ADD_MANUFACTURER_,
  CATALOG_ADD_MODEL_,
  CATALOG_ADD_MODIFICATION_,
} from '../../constants';

const commonState = {
  stepsSavedResults: [],
	activeStep: 0,
  isStepSelected: false,
  stepValue: '',
};

const initialStepsState = {
  CLIENT_ADD_CAR_: {
    ...commonState,
    steps: ['Производитель', 'Модель', 'Модификация'],
    prefix: CLIENT_ADD_CAR_,
  },
  CATALOG_FULL_ADD_GROUP_: {
    ...commonState,
    steps: ['Группа', 'Подгруппа', 'Фильтры'],
  },
  CATALOG_ADD_MANUFACTURER_: {
    ...commonState,
    label: 'Производитель',
    steps: ['Производитель'],
    prefix: CATALOG_ADD_MANUFACTURER_,
    filterLabel: 'filtersManufacturer',
  },
  CATALOG_ADD_MODEL_: {
    ...commonState,
    label: 'Модель',
    steps: ['Производитель', 'Модель'],
    prefix: CATALOG_ADD_MODEL_,
    filterLabel: 'filtersModel',
  },
  CATALOG_ADD_MODIFICATION_: {
    ...commonState,
    label: 'Модификация',
    steps: ['Производитель', 'Модель', 'Модификация'],
    prefix: CATALOG_ADD_MODIFICATION_,
    filterLabel: 'filtersModification',
  },
};

const stepsReducerFor = prefix => {
  const stepsReducer = (state = initialStepsState[prefix], action) => {
    switch (action.type) {

      case prefix + SET_ACTIVE_STEP: {
        return {
          ...state,
          activeStep: action.payload
        };
      }
  
      case prefix + ADD_STEP: {
        return {
          ...state,
          stepsSavedResults: [
            ...state.stepsSavedResults,
            action.payload
          ],
        };
      }
  
      case prefix + DELETE_STEPS: {			
        return {
          ...state,
          stepsSavedResults: [
            ...state.stepsSavedResults.slice(0, action.payload),
          ],
        };
      }
  
      case prefix + SET_IS_STEP_SELECTED: {
        return {
          ...state,
          isStepSelected: action.payload
        }
      }

      case prefix + SET_STEP_VALUE: {
        return {
          ...state,
          stepValue: action.payload
        }
      }
  
      default:
        return state;
    }
  };
  return stepsReducer;
};

export default stepsReducerFor;
