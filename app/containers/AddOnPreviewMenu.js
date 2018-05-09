import {connect} from 'react-redux';
import {AddOnPreviewMenu} from '../components/AddOnPreviewMenu/index.jsx'
import {toggleAddOnPreviewMenuVisibility} from '../store/actionCreators/addOnPreviewMenu';
import {addNewPreview} from '../store/actionCreators/previews';

const mapStateToProps = (state) => {
  return {
    isVisible: state.addOnPreviewMenu.isVisible
  }
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    toggleAddOnPreviewsMenu: () => {
      dispatch(toggleAddOnPreviewMenuVisibility());
    },
    addPreview: (todoObj) => {
      dispatch(addNewPreview(todoObj))
    }
  }
};

export const AddOnPreviewMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOnPreviewMenu);
