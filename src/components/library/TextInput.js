import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import './css/text_input.css';

class TextInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.any,
    disabled: PropTypes.bool,
    placeholder: PropTypes.node,
    id: PropTypes.string,
    required: PropTypes.bool,
    focus: PropTypes.bool,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.any,
  }

  static defaultProps = {
    disabled   : false,
    placeholder: '',
    required   : false
  }

  constructor(props) {
    super(props);

    this.state = {
      value  : props.value,
      focused: false
    }

    this._debounce = _.noop;
  }

  componentWillMount() {
    if (this.props.debounce) {
      this._debounce = _.debounce(() => {
        this.props.onChange.call(this, this.state.value);
      }, this.props.debounce);
    }
  }

  _onDebounceChange = (e) => {
    this.setState({ value: e.target.value });
    this._debounce();
  }

  _onChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });

    if (!this.props.onChange) {
      return;
    }

    this.props.onChange(value);
  }

  _onBlur = () => {
    const value = this.state.value;

    if (this.props.onBlur) {
      this.props.onBlur(value);
    }

    this.setState({ value });
  }

  _onFocus = () => {
    this.setState({ focus: true });
  }

  render() {
    const {label, focus, ...props} = this.props
    const classnames = classNames({
      'text-input': true,
      'focused'   : this.state.focus
    });

    return (
      <div className={ classnames }>
        <label>{ label }</label>
        <input
          { ...props }
          onChange={  this.props.debounce ? this._onDebounceChange : this._onChange  }
          onBlur={ this._onBlur }
          onFocus={ this._onFocus }
          value={ this.state.value }
        />
      </div>
    )
  }
}

export default TextInput;