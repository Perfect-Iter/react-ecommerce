import React from 'react'

import './form-input.scss'

type FormInputProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    [x:string]: any
}

const FormInput: React.FC<FormInputProps> = ({handleChange, label, ...otherProps}) => {
  return (
    <div className='group'>
      <input type="text" className='form-input' onChange={handleChange} {...otherProps} />
      {
        label ? (
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
        ): null
      }
    </div>
  )
}

export default FormInput
