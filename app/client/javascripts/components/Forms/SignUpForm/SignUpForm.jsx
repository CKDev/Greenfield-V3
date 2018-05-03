import React from 'react';
import Title from '../../Title/Title';
import TextField from '../TextField/TextField';
import Subtitle from '../../Subtitle/Subtitle';
import FormInstructions from '../FormInstructions/FormInstructions';

export default class SignUpForm extends React.Component {
  url = '/users/sign_in';
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

  render() {
    return (
      <form action={ this.url } method='POST'>
        <Title text={this.title}/>
        <Subtitle text={this.subtitle}/>
        <FormInstructions
          heading={this.instructionsHeading}
          body={ this.formInstructionsText }
        />
        <TextField
          label='First Name'
        />
        <TextField
          label='Last Name'
        />

      </form>
    );
  }
}