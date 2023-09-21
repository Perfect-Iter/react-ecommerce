import React from 'react'

import './auth.scss'
import SignIn from '../../components/signin/Signin'
import SignUp from '../../components/sign-up/SignUp'

const Auth: React.FC = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Auth
