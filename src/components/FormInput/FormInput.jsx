import React from 'react'
import PropTypes from 'prop-types'

import { InputGroup, StyledInput, StyledLabel } from './FormInputStyles'

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

function FormInput({ handleChange, label = '', value, type, ...otherProps }) {
  return (
    <InputGroup>
      <StyledInput
        onChange={handleChange}
        type={type}
        value={value}
        {...otherProps}
      />
      {label && <StyledLabel value={value}>{label}</StyledLabel>}
    </InputGroup>
  )
}

export default FormInput
