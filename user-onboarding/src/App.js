import './App.css';
import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios'
import Form from './Form';
import schema from './formSchema'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: '', 
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '', 
}

export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
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
    console.log(newUser);
    setFormValues(initialFormValues);
    postNewUser(newUser);
  }
  
  return (
    <div className="App">
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      errors={formErrors}
      />
    </div>
  );
}
