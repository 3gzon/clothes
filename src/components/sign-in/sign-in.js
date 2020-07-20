
import React, { Component } from 'react'
import "./sign-in.scss"
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { signInWithGoogle } from '../../firebase/firebase.utils'
export default class signIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ email: '', password: '' })
    }
    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have acconut</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" id="email" label="Email" handleChange={this.handleChange} type="email" value={this.state.email} required />
                    <FormInput label="Password" name="password" id="password" handleChange={this.handleChange} type="password" value={this.state.password} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
