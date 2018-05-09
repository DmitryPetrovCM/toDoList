import React from 'react';
import './index.less';
import PropTypes from 'prop-types';
import ToDoPreview from './ToDoPreview/index.jsx'

export class PreviewsMenu extends React.Component {
  static get VISIBLE_MENU_CSS_CLASS() {
    return 'menu-is-visible';
  }

  static get HIDDEN_MENU_CSS_CLASS() {
    return 'menu-is-hidden';
  }

  constructor(props) {
    super(props);
  }

  get currentPreviews() {
    return this.props.previews.map((item) => <ToDoPreview key={ item.id }
                                                          heading={ item.heading }
                                                          description={ item.description }
                                                          isCompleted={ item.isCompleted }/>);
  }

  get currentVisibilityClassName() {
    return this.props.isVisible ? this.constructor.VISIBLE_MENU_CSS_CLASS : this.constructor.HIDDEN_MENU_CSS_CLASS;
  }

  render() {
    const {previews, isVisible} = this.props;

    return(
      <div className={`preview-menu ${this.currentVisibilityClassName}`}>
        <div className="previews-list-container">
          <ul>
            { this.currentPreviews }
          </ul>
        </div>
        <button className="menu-switch" onClick={this.props.togglePreviewsMenu}/>
      </div>
    );
  }
}

PreviewsMenu.propTypes = {
  previews: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  })),
  isVisible: PropTypes.bool,
  togglePreviewsMenu: PropTypes.func.isRequired
};