import React from 'react'
import SignIn from './SignIn'

const Card = () => {
  return (
    <div className='box card-box'>       

         {/* || transparent-card */}
         <div className='background-transparency-2'>
            <div className='wl-msg' id='sign-up'>
                <h1>Get Started!</h1>
                
                <p>Sign up to join our innovative community. Experience convenience and excitement today!</p>
            </div>
            <div className='wl-msg' id='sign-in'>
                <h1>Welcome Back!</h1>
                <p>Sign in to access your personalized dashboard and continue your journey towards success.</p>
            </div>

            <SignIn/>
         </div>
    </div>
  )
}

export default Card