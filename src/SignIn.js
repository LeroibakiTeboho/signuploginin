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

        <div className='separator'>
            <i className='line'></i>
            <p>or</p>
            <i className='line'></i>
        </div>

        <div className='sign-up-platforms'>
            <div className='media-bg google'>
                <i class="fa-brands fa-google"></i>
                <p>Sign up with Google</p>
            </div>           
            <div className='media-bg facebook'>
                <i class="fa-brands fa-facebook-f"></i>
                <p>Sign Up with Facebook</p>
            </div>
           
        </div>
    </form>
  )
}

export default SignIn