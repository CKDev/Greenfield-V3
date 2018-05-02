import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './GreenfieldApp.scss';

export default class GreenfieldApp extends React.Component {
  render() {
    return (
      <div className='GreenfieldApp'>
        <SignUpForm />
      </div>
    );
  }
}