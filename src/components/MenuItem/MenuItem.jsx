import React from 'react'
import PropTypes from 'prop-types'
import { useHistory, useRouteMatch } from 'react-router-dom'

import { MenuItemWrapper, Content, Title, Subtitle } from './MenuItemStyles'

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
}

function MenuItem({ title, imageUrl, linkUrl, size, ...rest }) {
  const history = useHistory()
  const match = useRouteMatch()

  const handleClick = () => history.push(`${match.url}${linkUrl}`)

  return (
    <MenuItemWrapper
      onClick={handleClick}
      imageUrl={imageUrl}
      size={size}
      {...rest}
    >
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </MenuItemWrapper>
  )
}

export default MenuItem
