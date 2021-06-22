import React from 'react'
import PropTypes from 'prop-types'
import { useHistory, useRouteMatch } from 'react-router-dom'

import {
  CollectionPreviewWrapper,
  Title,
  Preview,
} from './CollectionPreviewStyles'

import { collectionItemPropType } from '../../constants'
import CollectionItem from '../CollectionItem'

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(collectionItemPropType)).isRequired,
}

function CollectionPreview({ title, routeName, items }) {
  const history = useHistory()
  const match = useRouteMatch()

  const handleClick = () => history.push(`${match.url}/${routeName}`)

  return (
    <CollectionPreviewWrapper>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((_, i) => i < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </Preview>
    </CollectionPreviewWrapper>
  )
}

export default CollectionPreview
