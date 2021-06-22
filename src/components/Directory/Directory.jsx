import React, { useState, useEffect } from 'react'

import { SECTION_DATA } from '../../constants'
import MenuItem from '../MenuItem'

import { DirectoryMenu } from './DirectoryStyles'

function Directory() {
  const [sections, setSections] = useState([])

  useEffect(() => {
    setSections(SECTION_DATA)
  }, [])

  return (
    <DirectoryMenu>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenu>
  )
}

export default Directory
