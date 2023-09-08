import React from 'react'

import './auth.scss'
import SignIn from '../../components/signin/Signin'

const Auth: React.FC = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
    </div>
  )
}

export default Auth
