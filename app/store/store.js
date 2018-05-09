import { createStore, combineReducers } from 'redux';
import {previewsMenuReducer} from './reducers/previewsMenu';
import {addOnPreviewVisibilityReducer} from './reducers/addOnPreviewMenu';

const rootReducer = combineReducers({
  previewsMenu: previewsMenuReducer,
  addOnPreviewMenu: addOnPreviewVisibilityReducer
});

export default createStore(rootReducer);