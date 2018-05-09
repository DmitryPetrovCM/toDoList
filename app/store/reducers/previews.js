import {ACTION_TYPES} from '../actionCreators/actions';
import {INITIAL_STATE} from './initialStates/previews';

export const previewsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_PREVIEW:
      return [
        ...state,
        action.payload
      ];
    break;
    case ACTION_TYPES.REMOVE_PREVIEW:
      const currentState = [...state];

      currentState.splice(currentState.findIndex(item => item.id === action.id), 1);

      return currentState;
    default:
      return state;
  }
};

