import React from 'react';
import FormTitle from '../FormTitle/FormTitle';
import TextField from '../TextField/TextField';

export default class SignUpForm extends React.Component {
  url = '/users/sign_in';

  render() {
    return (
      <form action={ this.url } method='POST'>
        <FormTitle text='This is a form.'/>
        <TextField />
      </form>
    )
  }
}