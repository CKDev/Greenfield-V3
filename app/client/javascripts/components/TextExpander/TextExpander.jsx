import React from 'react';
import store from '../../store/index';
import './TextExpander.scss';

export default class TextExpander extends React.Component {

  render() {
    return (
      <a href='javascript:void(0)' className='TextExpander' onClick={ this.props.onClick }>
        { store.getState().expanded ? 'read more...' : 'read less...' }
      </a>
    );
  }
}