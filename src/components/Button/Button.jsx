import React from 'react'
import PropTypes from 'prop-types'

import { ButtonWrapper } from './ButtonStyles'

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isGoogleSignIn: PropTypes.bool,
}

function Button({ children, isGoogleSignIn = false, ...otherProps }) {
  return (
    <ButtonWrapper isGoogleSignIn={isGoogleSignIn} {...otherProps}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
