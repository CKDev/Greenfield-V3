import React from 'react';
import TPRight from 'tp_right.png';
import TPWrong from 'tp_wrong.png';
import './Confirmation.scss';

export default class Confirmation extends React.Component {
  render() {
    return (
      <div className='Confirmation'>
        <p>
          { this.props.data.get('first_name') !== '' && this.props.data.get('last_name') !== '' ? (
            `${this.props.data.get('first_name')} ${this.props.data.get('last_name')}, `
          ) : ('') }
          you chose
          <span className={ this.props.data.get('choice') }>
          { ` ${this.props.data.get('choice') === 'right' ? 'wisely' : 'poorly'}` }
          </span>
          .
        </p>
        <img src={ this.props.data.get('choice') === 'right' ? TPRight : TPWrong }/>
      </div>
    );
  }
}