import React, { useState } from 'react'

import { SHOP_DATA } from '../../constants'
import CollectionPreview from '../../components/CollectionPreview'

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA)

  return (
    <div>
      <h1>Collections</h1>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
