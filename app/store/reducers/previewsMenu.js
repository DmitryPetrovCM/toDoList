import {combineReducers} from 'redux';
import {previewsReducer} from './previews'
import {ACTION_TYPES} from '../actionCreators/actions';
import {INITIAL_STATE} from './initialStates/previewsMenu';

const menuVisibilityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_PREVIEWS_MENU:
      return {
        ...state,
        isVisible: action.isVisible !== undefined ? action.isVisible : !state.isVisible
      };
    default:
      return state;
  }
};

export const previewsMenuReducer = combineReducers({
  menuVisibility: menuVisibilityReducer,
  previews: previewsReducer
});

