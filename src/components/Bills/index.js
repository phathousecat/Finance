// src/components/Bills/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import NewBillForm from './NewBillForm';
import Button from '../library/Button';

import './style.css';

class Bills extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {
    showForm: false
  }

  _openForm = () => {
    this.setState((prevState, props) => {
      return { showForm: !prevState.showForm }
    });
  }

  render() {
    const { className, ...props } = this.props;
    const newBillForm = this.state.showForm ? <NewBillForm /> : '';

    return (
      <div className={classnames('Bills', className)} {...props}>
        <h1>
          Bills
        </h1>
        <Button label="Add Bill" onClick={ this._openForm } />
        { newBillForm }
      </div>
    );
  }
}

export default Bills;
