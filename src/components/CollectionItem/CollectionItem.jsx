import React from 'react'
import PropTypes from 'prop-types'

import {
  CollectionItemWrapper,
  CollectionImage,
  CollectionFooter,
  ItemName,
  ItemPrice,
} from './CollectionItemStyles'

CollectionItem.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
}

function CollectionItem({ name, imageUrl, price }) {
  return (
    <CollectionItemWrapper>
      <CollectionImage imageUrl={imageUrl}></CollectionImage>
      <CollectionFooter>
        <ItemName>{name}</ItemName>
        <ItemPrice>${price}</ItemPrice>
      </CollectionFooter>
    </CollectionItemWrapper>
  )
}

export default CollectionItem
