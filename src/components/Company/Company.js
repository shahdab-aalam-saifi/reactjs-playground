import "./Company.css";
import React from "react";

const Button = props => (
  <button className="btn" onClick={props.action}>
    {props.title}
  </button>
);

const Text = props => <span className="form-title">{props.title}</span>;

const TextInput = props => (
  <input type="text" placeholder={props.placeholder} required />
);

const Company = () => (
  <form>
    <Text title="<Form />" />
    <TextInput placeholder="Company Name" />
    <Button title="Go!" />
  </form>
);

export default Company;
