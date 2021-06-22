import PropTypes from 'prop-types'

export const collectionItemPropType = {
  id: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
}

export const collectionPropType = {
  id: PropTypes.number,
  title: PropTypes.string,
  routeName: PropTypes.string,
  items: PropTypes.arrayOf(collectionItemPropType),
}
