import React from 'react';
import store from '../../../../store/index';
import { checkRadio } from '../../../../actions/CheckRadio';
import './RadioInput.scss';

export default class RadioInput extends React.Component {

  constructor(props) {
    super(props);
    this.checkButton = this.checkButton.bind(this);
  }

  checkButton(e) {
    store.dispatch(checkRadio(e.target.id));
  }

  render() {
    return (
      <div className='RadioInput'>
        <label className='label'>{ this.props.label }</label>
        <div className='choices'>
          { this.props.choices.map((choice, i) =>
            <label key={ i } className='wrapper'>
              <input
                type='radio'
                value={ choice.value }
                name='choice'
                checked={ store.getState().checked === i.toString() ? 'checked' : '' }
              />
              <span className='customButton' id={ i } onClick={ this.checkButton }/>
              <img src={ choice.label }/>
            </label>
          ) }
        </div>
      </div>
    );
  }
}