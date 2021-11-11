import React, { useState } from 'react';
import './App.css';
import Form from './Form';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: '', 
}

export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms.trim(),
    }
  }
  return (
    <div className="App">
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      />
    </div>
  );
}
