import React from 'react'

import {
  HomepageWrapper,
  DirectoryMenu,
  MenuItem,
  Content,
  Title,
  Subtitle,
} from './HomepageStyles'

function Homepage() {
  const categories = ['HATS', 'JACKETS', 'SNEAKERS', 'WOMENS', 'MENS']

  const renderedCategories = categories.map((el) => (
    <MenuItem key={el}>
      <Content>
        <Title>{el}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </MenuItem>
  ))

  return (
    <HomepageWrapper>
      <DirectoryMenu>{renderedCategories}</DirectoryMenu>
    </HomepageWrapper>
  )
}

export default Homepage
