import React from 'react'
import FormInput from '../form-input/FormInput'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/CustomButton'

import './sign-up.scss'

type SignUpProps = {
    displayName: string,
    email: string,
    password: string,
    confirmPassword: string
}

class SignUp extends React.Component<{}, SignUpProps> {

    constructor(props: any) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        } as SignUpProps
    }

    handleSubmit = async ( event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword) {
            alert("Passwords don't match")
            return
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

           await createUserProfileDocument(user, {displayName});

           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
           })

        } catch(error){
            console.error(error)
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        this.setState({[name]: value} as Pick<SignUpProps, keyof SignUpProps>)
    }

    render(): React.ReactNode {

        const {displayName, email, password, confirmPassword} = this.state

        return (
        <div className='sign-up'>
            <h2 className='title'>I do Not Have an Account</h2>
            <span>Sign up with your Email</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput type='text' name='displayName' value={displayName} handleChange={this.handleChange} label='Display Name' required />

                <FormInput type='email' name='email' value={email} handleChange={this.handleChange} label='Email' required />

                <FormInput type='password' name='password' value={password} handleChange={this.handleChange} label='Password' required />

                <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={this.handleChange} label='Confirm Password' required />

                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
        )
    }
}

export default SignUp
