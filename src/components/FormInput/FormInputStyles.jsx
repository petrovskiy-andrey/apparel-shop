import styled, { css } from 'styled-components/macro'

const shrink = `
  top: -14px;
  font-size: 12px;
  color: black;
`

export const InputGroup = styled.div`
  position: relative;
  margin: 45px 0;
`

export const StyledInput = styled.input`
  background: none white;
  color: black;
  font-size: 18px;
  padding: 10px 0;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus-within:first-of-type + label {
    ${shrink}
  }

  letter-spacing: ${({ type }) => type === 'password' && 0.3}em;
`

export const StyledLabel = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ value }) =>
    value.length &&
    css`
      ${shrink}
    `}
`
