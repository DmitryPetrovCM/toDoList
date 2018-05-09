import React from 'react';
import './index.less';
import PropTypes from 'prop-types';
import {PreviewTemplate} from './PreviewTemplate/index.jsx';

export class AddOnPreviewMenu extends React.Component {
  static get VISIBLE_MENU_CSS_CLASS() {
    return 'add-on-menu-is-visible';
  }

  static get HIDDEN_MENU_CSS_CLASS() {
    return 'add-on--is-hidden';
  }

  constructor(props) {
    super(props);
  }

  get currentVisibilityClassName() {
    return this.props.isVisible ? this.constructor.VISIBLE_MENU_CSS_CLASS : this.constructor.HIDDEN_MENU_CSS_CLASS;
  }

  render() {
    const {addPreview, toggleAddOnPreviewsMenu} = this.props;

    return(
      <div className={`add-on-preview-menu ${this.currentVisibilityClassName}`}>
        <button className="add-on-preview-switch-btn" onClick={toggleAddOnPreviewsMenu}>+</button>
        <PreviewTemplate addPreview={addPreview}/>
      </div>
    );
  }
}

AddOnPreviewMenu.propTypes = {
  isVisible: PropTypes.bool,
  addPreview: PropTypes.func.isRequired,
  toggleAddOnPreviewsMenu: PropTypes.func.isRequired
};