import {
  ADD_IMAGES,
	DELETE_IMAGE,
} from 'redux/constants';

const setAddImagesFor = prefix => {
  const addImages = images => ({ 
    type: prefix + ADD_IMAGES, 
    payload: images 
  });
  return addImages;
}

const setDeleteImageFor = prefix => {
  const deleteImage = idx => ({ 
    type: prefix + DELETE_IMAGE, 
    payload: idx 
  });
  return deleteImage;
}

export {
  setAddImagesFor,
  setDeleteImageFor,
};