import React from 'react';

export default function Form(props) {
    const {
        values,
        submit,
        change,
      } = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
      }
    return (
        <form className ='form-container' onSubmit={onSubmit}>
            <div className='form-inputs'>
                <h1>New User</h1>
                <label>Name
                    <input 
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    />
                </label>
                <label>Email
                    <input 
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    />
                </label>
                <label>Password
                    <input 
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={onChange}
                    />
                </label>
                <label>Accept Terms
                    <input 
                    type="radio"
                    name="terms"
                    value="yes"
                    onChange={onChange}
                    checked={values.terms === 'yes'}
                    />
                </label>
                <label>Decline Terms
                    <input 
                    type="radio"
                    name="terms"
                    value="no"
                    onChange={onChange}
                    />
                </label>
                <button>submit</button>
            </div>
        </form>
    )
}