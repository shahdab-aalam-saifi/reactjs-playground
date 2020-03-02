import './Company.css';
import React from 'react';

function Button(props) {
  return <button className="btn" onClick={props.action}>{props.title}</button>;
}

function Text(props) {
  return <span className="form-title">{props.title}</span>;
}

function TextInput(props) {
  return <input type="text" placeholder={props.placeholder} required />;
}

// Company Component
export default class Company extends React.Component {
  render() {
    return (
      <form>
        <Text title="<Form />" />
        <TextInput placeholder="Company Name" />
        <Button title="Go!" />
      </form>
    );
  }
}