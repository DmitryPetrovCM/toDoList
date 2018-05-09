import {ACTION_TYPES} from '../actionCreators/actions';
import {INITIAL_STATE} from './initialStates/previewsMenu';

export const addOnPreviewVisibilityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_ADD_ON_PREVIEW_MENU_VISIBILITY:
      return {
        ...state,
        isVisible: action.isVisible !== undefined ? action.isVisible : !state.isVisible
      };
    default:
      return state;
  }
};

