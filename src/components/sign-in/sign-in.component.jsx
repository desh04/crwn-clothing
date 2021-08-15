import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utilis';

import './sign-in.style.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefalut();

        const { email, password } = this.state;
        
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "",
            password:""})
        } catch(error) {
            console.log(error);
        }

        this.setState({email: "",
            password:""})
    }

    handleChange = event => {
        const { value, name } = event.target;  // event.target will be the input element itself.

        this.setState({ [name]: value })   // like if name is password will put the value in the password key.
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput  
                        name='email' 
                        type='email'
                        value={ this.state.email }
                        handleChange={ this.handleChange }
                        label="Email"
                        required 
                    />
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={ this.state.password }
                        handleChange={ this.handleChange }
                        label="Password"
                        required 
                    />
                    
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign-In </CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>
                            {' '}Sign In With Google{' '} 
                        </CustomButton>
                    </div>

                    
                </form>
            </div>
        )
    }
}

export default SignIn;