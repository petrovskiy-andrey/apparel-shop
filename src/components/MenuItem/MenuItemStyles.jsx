import styled from 'styled-components/macro'

export const MenuItemWrapper = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background-position: center;
  background-size: cover;

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  background-image: url(${({ imageUrl }) => imageUrl});
  height: ${({ size }) => (size === 'large' ? 380 : 240)}px;
`

export const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.5);
`

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`
