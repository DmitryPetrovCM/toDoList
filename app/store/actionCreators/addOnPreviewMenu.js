import {ACTION_TYPES} from './actions';

export const toggleAddOnPreviewMenuVisibility = (isVisible) => {
  return {
    type: ACTION_TYPES.TOGGLE_ADD_ON_PREVIEW_MENU_VISIBILITY,
    isVisible
  }
};