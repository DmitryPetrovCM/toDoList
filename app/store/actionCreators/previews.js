import {ACTION_TYPES} from './actions';

export const addNewPreview = (newPreview) => {
  return {
    type: ACTION_TYPES.ADD_PREVIEW,
    payload: newPreview
  }
};