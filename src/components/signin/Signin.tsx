import React from 'react'
import  './signin.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

interface SignInState{
    email: string,
    password: string
}

class SignIn extends React.Component<{}, SignInState>{

    constructor(props: {}){
        super(props)

        this.state={
            email:'',
            password:''
        } as SignInState
    }

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const {email, password} = this.state

        try{
            await auth.signInWithEmailAndPassword(email, password)

            this.setState({email:'', password:''})
        } catch(error){
            console.log(error)
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target

        this.setState({[name]: value} as Pick<SignInState, keyof SignInState>)
    }

    render(): React.ReactNode{
        return(
            <div className="sign-in">
                <h2>I already hav an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" id="email" value={this.state.email} handleChange={this.handleChange} label='email' required/>

                    <FormInput type="password" name="password" id="password" value={this.state.password} handleChange={this.handleChange} label='password' required/>

                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>

                        <CustomButton onClick = {signInWithGoogle} isGoogleSignin= {true}>
                            {' '}
                            Sign In with Google{' '}
                        </CustomButton>
                    </div>
                </form>

            </div>
        )
    }

}

export default SignIn
