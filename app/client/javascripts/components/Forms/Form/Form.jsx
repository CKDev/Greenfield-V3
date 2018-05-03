import React from 'react';
import Title from '../../Title/Title';
import Subtitle from '../../Subtitle/Subtitle';
import FormInstructions from '../FormInstructions/FormInstructions';
import TextField from '../Inputs/TextField/TextField';
import RadioInput from '../Inputs/RadioInput/RadioInput';
import Submit from '../Inputs/Submit/Submit';
import TPRight from 'tp_right.png';
import TPWrong from 'tp_wrong.png';
import './Form';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  url = '';
  title = 'This is a form.';
  subtitle = 'Fill it out.';
  instructionsHeading = 'Which are you?';
  formInstructionsText =
    `There are two types of people in this world: people who are right, and people who are wrong. To find out where 
      you rank in this, please fill out the following. There is a correct answer to all of the following. I expect that 
      you can at least answer your name correctly, but are you otherwise on the right side of history with the all-important 
      "TP question." After entering your name, there is a simple, yet critical, quiz. The answer to this one question is 
      one that has divided families and friends alike for centuries. Since the days that Ceasar and Brutus ended up on 
      different sides of the argument, and we all know how that ended.  To assure everyone's safety, we have gone to great 
      lengths to ensure the anonymity of every response. We will never share your data with anyone, but we will sell it 
      to Facebook. I have heard that Facebook has very high standards for data accuracy and personal privacy, and so you 
      can rest assured that there will never be any backlash for answering incorrectly. There is no way, for instance, 
      that your name will be on a government watch list, and potentially added to the no-fly list. You can answer honestly
       knowing that there is no way your life will then spiral out of your control as a result of responding incorrectly. 
    `;
  radioOptions = [
    {label: TPWrong, value: 'wrong'},
    {label: TPRight, value: 'right'}
  ];


  submitForm(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    this.props.onSubmit(data);
  }

  render() {
    return (
      <form action={ this.url } method='POST' className='Form' onSubmit={this.submitForm}>
        <Title text={ this.title }/>
        <Subtitle text={ this.subtitle }/>
        <FormInstructions
          heading={ this.instructionsHeading }
          body={ this.formInstructionsText }
        />
        <div className='form-group'>
          <TextField
            label='First Name'
            name='first_name'
          />
        </div>
        <div className='form-group'>
          <TextField
            label='Last Name'
            name='last_name'
          />
        </div>
        <div className='form-group'>
          <RadioInput
            label='Which of the following is correct?'
            choices={ this.radioOptions }
          />
        </div>
        <div className='actions'>
          <Submit
            text='submit'
          />
        </div>
      </form>
    );
  }
}