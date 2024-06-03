import React from 'react'

const SignIn = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <h2>Sign up</h2>
        <div className='inputBox'>
            <input type="email" required />
            <label>Email</label>
            <i></i>
        </div>

        <div className='inputBox'>
            <input type="password" required/>
            <label>Create password</label>
            <i></i>
        </div>
        <div className='inputBox'>
            <input type="password" required/>
            <label>Confirm password</label>
            <i></i>
        </div>
        <div className='links'>
            <a href="#">Forgot Password</a>
            <a href="#">Sign Up</a>
        </div>
        <input type="submit" value='Login' />
    </form>
  )
}

export default SignIn