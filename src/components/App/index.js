// src/components/App/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import IconButton from '../library/IconButton';

import logo from './logo.svg';
import './style.css';

class App extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  _transition = () => {
    console.log("HEY")
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <div className={classnames('links', className)}>
            <IconButton link="bills" type="bills" height='64px' width="64px" viewBox='0 0 64 64' />
            <IconButton link="wallet" type="wallet" height='64px' width="64px" viewBox='0 0 64 64' />
            <IconButton link="savings" type="savings" height='76px' width="76px" viewBox='0 0 64 64' />
            <IconButton link="debts" type="cards" height='70px' width="70px" viewBox='0 0 64 64' />
            <IconButton link="calendar" type="calendar" height='64px' width="64px" viewBox='0 0 64 64' />
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
