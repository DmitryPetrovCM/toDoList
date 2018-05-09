import React from 'react';
import './index.less';
import PropTypes from 'prop-types';

class ToDoPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {heading, description, isCompleted} = this.props;
    const completedMessage = isCompleted ? 'completed' : 'isn\'t completed';

    return(
      <li>
        <div className="heading-container">
          <h2 className="todo-preview-heading">{heading}</h2>
        </div>
        <div className="description-container">{description}</div>
        <div className="complete-container">
          <span className="complete-message">
            {completedMessage}
          </span>
        </div>
      </li>
    )
  }
}

ToDoPreview.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  isCompleted: PropTypes.bool.isRequired
};

export default ToDoPreview;