import React, { useState } from 'react'

import FormInput from '../FormInput'
import Button from '../Button'

import { SignInWrapper, SignInTitle, ButtonGroupWrapper } from './SignInStyles'

function SignIn() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setCredentials((prevState) => ({
      ...prevState,
      email: '',
      password: '',
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <SignInWrapper>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={credentials.email}
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={credentials.password}
          required
          handleChange={handleChange}
        />
        <ButtonGroupWrapper>
          <Button type="submit">SIGN IN</Button>
          <Button type="submit" isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </Button>
        </ButtonGroupWrapper>
      </form>
    </SignInWrapper>
  )
}

export default SignIn
