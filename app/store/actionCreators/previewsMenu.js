import {ACTION_TYPES} from './actions';

export const togglePreviewMenuVisibility = (isVisible) => {
  return {
    type: ACTION_TYPES.TOGGLE_PREVIEWS_MENU,
    isVisible
  }
};