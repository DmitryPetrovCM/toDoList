import {connect} from 'react-redux';
import {PreviewsMenu} from '../components/PreviewsMenu/index.jsx'
import {togglePreviewMenuVisibility} from '../store/actionCreators/previewsMenu'

const mapStateToProps = (state) => {
  return {
    previews: state.previewsMenu.previews,
    isVisible: state.previewsMenu.menuVisibility.isVisible
  }
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    togglePreviewsMenu: () => {
      dispatch(togglePreviewMenuVisibility());
    }
  }
};

export const PreviewsMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewsMenu);
