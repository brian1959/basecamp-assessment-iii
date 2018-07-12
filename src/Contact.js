import React, { Component } from "react";
import "./contact.css";
import SingleInput from './SingleInput';
import TextArea from './TextArea';
 
class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Name: '',
        email: '',
        message: ''
      };
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
    }
    componentDidMount() {
      fetch('./message_db.json')
        .then(res => res.json())
        .then(data => {
          this.setState({
            Name: data.name,
            email:data.email,
            message: data.message
          });
        });
    }
    handleNameChange(e) {
      this.setState({ Name: e.target.value }, () => console.log('name:', this.state.Name));
    }
    handleEmailChange(e) {
      this.setState({ email: e.target.value }, () => console.log('email', this.state.email));
    }
    handleMessageChange(e) {
      // const textArray = e.target.value.split('').filter(x => x !== 'e');
      // console.log('string split into array of letters',textArray);
      // const filteredText = textArray.join('');
      this.setState({ message: e.target.value }, () => console.log('message', this.state.message));
    }
    handleClearForm(e) {
      e.preventDefault();
      this.setState({
        Name: '',
        email: '',
        message: ''
      });
    }
    handleFormSubmit(e) {
      e.preventDefault();
  
      const formPayload = {
        Name: this.state.Name,
        email: this.state.email,
        message: this.state.message
      };
  
      console.log('Send this in a POST request:', formPayload);
      this.handleClearForm(e);
    }
  render() {
    return (
      <div >
        <h2>GOT QUESTIONS?</h2>
        <form>
            <SingleInput
              input type={'text'}
              title={'Name: '}
              name={'name'}
              controlFunc={this.handleNameChange}
              content={this.state.Name}
              placeholder={'Type first and last name here'} />
            <SingleInput
              input type={'text'}
              title={'e-mail: '}
              name={'email'}
              controlFunc={this.handleEmailChange}
              content={this.state.email}
              placeholder={'email address'} />
            <TextArea
              title={'message'}
              name={'message: '}
              rows ={10}
              resize={false}
              controlFunc={this.handleMessageChange}
              content={this.state.message}
              placeholder={'Tell us what you are thinking'} />
            <input 
              type="submit"
              className="btn btn-primary float-right"
              value ="submit" />
            <button
              className="btn btn-link float-left"
              onClick={this.handleClearForm}>Clear Form</button>
        </form>
      </div>
    );
  }
}
 
export default Contact;