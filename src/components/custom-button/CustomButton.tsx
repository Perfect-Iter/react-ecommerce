import React from 'react'

import './custom-button.scss'

type CustomButtonProps = {
    children: React.ReactNode;
    isGoogleSignin?: boolean;
    [x:string]: any

}

const CustomButton: React.FC<CustomButtonProps> = ({ children, isGoogleSignin, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignin ? 'google-sign-in' : '' } custom-button`} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
