import React, { PropTypes, Component } from 'react';

class Button extends Component {
  static PropTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
  }

  _handleClick = (e) => {
    e.preventDefault();

    if (!this.props.onClick) {
      return;
    }

    return this.props.onClick(e);
  }

  render() {
  	const { label } = this.props;

    return <button { ...this.props } onClick={ this._handleClick }>{ label }</button>
  }
}

export default Button;