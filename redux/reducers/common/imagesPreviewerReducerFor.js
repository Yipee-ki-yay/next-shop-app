import { 
  ADD_IMAGES,
	DELETE_IMAGE,
} from '../../constants';

const initialState = {
  images: [],
};

const imagesPreviewerReducerFor = prefix => {
  const imagesPreviewerReducer = (state = initialState, action) => {
    switch (action.type) {

      case prefix + ADD_IMAGES: {
        return {
          ...state,
          images: [...state.images, ...action.payload]
        };
      }
  
      case prefix + DELETE_IMAGE: {			
        return {
          ...state,
          images: [
            ...state.images.slice(0, action.payload),
            ...state.images.slice(action.payload + 1)
          ],
        };
      }
  
      default:
        return state;
    }
  };
  return imagesPreviewerReducer;
};

export default imagesPreviewerReducerFor;