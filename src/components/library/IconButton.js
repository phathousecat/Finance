import React, { PropTypes } from 'react';
import Link from 'react-router';
import classNames from 'classnames';

import './css/icon.css'

import icons from '../../helpers/statics/icons';

class Icon extends React.PureComponent {

  static propTypes = {
    type     : PropTypes.string,
    title    : PropTypes.string,
    className: PropTypes.string,
    link   : PropTypes.string,
    width    : PropTypes.string,
    height   : PropTypes.string,
    viewBox  : PropTypes.string,
  }

  static defaultProps = {
    width  : '16px',
    height : '16px',
    viewBox: '0 0 16 16'
  }

  _onClick = e => {
   console.log(e)
  }

  render() {
    const iconSvg = { __html: icons[this.props.type] };
    const classname = classNames({
      'icon-button'            : true,
      [this.props.className]: this.props.className
    });

    /* eslint-disable react/no-danger */
    return (
      <a className={classname} href={ this.props.link }>
        <svg x="0px" y="0px" width={ this.props.width } height={ this.props.height } viewBox={ this.props.viewBox }>
          <title>{ this.props.title }</title>
          <g xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={ iconSvg } />
        </svg>
      </a>
    );
  }
}

module.exports = Icon;