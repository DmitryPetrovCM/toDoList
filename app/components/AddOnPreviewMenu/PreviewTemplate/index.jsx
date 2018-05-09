import React from 'react';
import './index.less';
import PropTypes from 'prop-types';

export class PreviewTemplate extends React.Component {
  static set previewsIDsCounter(value) {
    this._previewsIDsCounter = value;
  }

  static get previewsIDsCounter() {
    if (this._previewsIDsCounter === undefined) {
      this._previewsIDsCounter = 1;
    }
    return this._previewsIDsCounter;
  }

  static get DEFAULT_HEADING_PLACEHOLDER() {
    return 'Please, enter todo heading.'
  }

  static get DEFAULT_DESC_PLACEHOLDER() {
    return 'Please, enter todo description.'
  }

  constructor(props) {
    super(props);

    this.state = {
      headingValue: '',
      descValue: '',
      _isHeadingWrong: false,
      _isDescWrong: false
    };

    this.bindHandlers();
  }

  set isHeadingWrong(value) {
    this.setState({_isHeadingWrong: value});
  }

  get isHeadingWrong() {
    return this.state._isHeadingWrong;
  }

  set isDescWrong(value) {
    this.setState({_isDescIWrong: value});
  }

  get isDescWrong() {
    return this.state._isDescWrong;
  }

  bindHandlers() {
    this.changeHeadingHandler = this.changeHeadingHandler.bind(this);
    this.changeDescHandler = this.changeDescHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.onHeadingFocusHandler = this.onHeadingFocusHandler.bind(this);
    this.onDescFocusHandler = this.onDescFocusHandler.bind(this);
  }

  changeHeadingHandler(e) {
    this.setState({headingValue: e.target.value});
  }

  changeDescHandler(e) {
    this.setState({descValue: e.target.value});
  }

  onHeadingFocusHandler(e) {
    if (this.isHeadingWrong) {
      this.isHeadingWrong = false;
    }
  }

  onDescFocusHandler(e) {
    if (this.isDescWrong) {
      this.isDescWrong = false;
    }
  }

  submitHandler(e) {
    e.preventDefault();

    this.isHeadingWrong = this.state.headingValue.length === 0;
    this.isDescWrong = this.state.descValue.length === 0;

    if (this.isHeadingWrong || this.isDescWrong) {
      return;
    }

    this.props.addPreview({
      id: this.constructor.previewsIDsCounter++,
      isCompleted: false,
      heading: this.state.headingValue,
      description: this.state.descValue
    });

    this.setState({headingValue: ''});
    this.setState({descValue: ''});
  }

  render() {
    return(
      <div className="preview-template-container">
        <form onSubmit={this.submitHandler}>
          <div className="heading-container user-input-container">
            <label htmlFor="new-preview-heading">Heading:</label>
            <input id="new-preview-heading"
                   className={this.isHeadingWrong ? 'wrong' : ''}
                   value={this.state.headingValue}
                   placeholder={this.constructor.DEFAULT_HEADING_PLACEHOLDER}
                   type="text"
                   onChange={this.changeHeadingHandler}
                   onFocus={this.onHeadingFocusHandler}/>
          </div>

          <div className="desc-container user-input-container">
            <label htmlFor="new-preview-desc">Description:</label>
            <textarea id="new-preview-desc"
                      className={this.isDescWrong ? 'wrong' : ''}
                      cols="30" rows="10"
                      placeholder={this.constructor.DEFAULT_DESC_PLACEHOLDER}
                      onChange={this.changeDescHandler}
                      onFocus={this.onDescFocusHandler}>
          </textarea>
          </div>
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
}

PreviewTemplate.propTypes = {
  addPreview: PropTypes.func.isRequired
};