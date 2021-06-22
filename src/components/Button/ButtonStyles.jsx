import styled from 'styled-components/macro'

export const ButtonWrapper = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-family: 'Open Sans Condensed', sans-serif;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #000000;
    border: 1px solid black;
  }

  background-color: ${({ isGoogleSignIn }) =>
    isGoogleSignIn ? '#6262b1' : 'black'};
`
