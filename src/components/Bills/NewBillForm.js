import React, {Component} from 'react';
import _ from 'lodash';

import TextInput from '../library/TextInput';
import TextArea from '../library/TextArea';
import Button from '../library/Button';
// import Button from '../library/Button';
// import keyCodes from '../../helpers/statics/keyCodes';

class NewBillForm extends Component {
  constructor() {
    super()
    this.state = {
      accountNumber: ''
    }
  }

  _transitionToAccountPage = () => {
    if (this.state.accountNumber) {
      this.props.pushHistory(`/accounts/${this.state.accountNumber}`)
    }
  }

  _handleEnter = (e) => {
    const hitEnterKey = e.keyCode === keyCodes.ENTER;

    // if user hit enter key, prevent default submit - check if form is correct - submit filters
    if (hitEnterKey) {
      e.preventDefault();
      this._transitionToAccountPage();
    }
  }

  render() {
    return (
      <div className="new-bill-form">
        <div className="form-group">
          <TextInput
            placeholder="$0.00"
            id="billAmount"
            value={this.state.accountNumber}
            onChange={(accountNumber) => { this.setState({accountNumber: _.camelCase(accountNumber)}) }}
            onKeyDown={this._handleEnter}
          />
        </div>
        <div className="form-group">
          <TextInput
            placeholder="Name"
            id="billName"
            value={this.state.accountNumber}
            onChange={(accountNumber) => { this.setState({accountNumber: _.camelCase(accountNumber)}) }}
            onKeyDown={this._handleEnter}
          />
        </div>
        <div className="form-group">
          <TextInput
            placeholder="DD/MM/YYYY"
            id="billDueDate"
            value={this.state.accountNumber}
            onChange={(accountNumber) => { this.setState({accountNumber: _.camelCase(accountNumber)}) }}
            onKeyDown={this._handleEnter}
          />
        </div>
        <div className="form-group">
          <TextArea
            placeholder="Notes"
            id="billNotes"
            value={this.state.accountNumber}
            onChange={(accountNumber) => { this.setState({accountNumber: _.camelCase(accountNumber)}) }}
            onKeyDown={this._handleEnter}
          />
        </div>
        <div className="button-group">
          <Button label="Create" />
        </div>
      </div>
    )
  }
}


export default NewBillForm