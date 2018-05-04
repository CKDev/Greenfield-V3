import React from 'react';
import store from '../../../store/index';
import { toggleExpand } from '../../../actions/ToggleExpand';
import TextExpander from '../../TextExpander/TextExpander';
import './FormInstructions.scss';

export default class FormInstructions extends React.Component {
  truncateLength = 200;

  displayText() {
    return store.getState().expanded ? this.props.body : this.props.body.substring(0, this.truncateLength) + '...';
  }

  render() {
    return (
      <div className='FormInstructions'>
        <div className='top'>
          <div className='heading'>
            { this.props.heading }
          </div>
          <TextExpander
            onClick={ () => store.dispatch(toggleExpand()) }
          />
        </div>
        <p className='body'>
          { this.displayText() }
        </p>
      </div>
    );
  }
}