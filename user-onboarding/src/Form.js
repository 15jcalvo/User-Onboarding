import React from 'react';

export default function Form(props) {
    return (
        <form className ='form-container'>
            <div className='form-inputs'>
                <h1>New User</h1>
                <label>Name
                    <input 
                    type="text"
                    name="name"
                    value="name"
                    />
                </label>
                <label>Email
                    <input 
                    type="email"
                    name="email"
                    value="email"
                    />
                </label>
                <label>Password
                    <input 
                    type="text"
                    name="password"
                    value="password"
                    />
                </label>
                <label>Accept Terms
                    <input 
                    type="radio"
                    name="terms"
                    value="yes"
                    />
                </label>
                <label>Decline Terms
                    <input 
                    type="radio"
                    name="terms"
                    value="no"
                    />
                </label>
            </div>
        </form>
    )
}