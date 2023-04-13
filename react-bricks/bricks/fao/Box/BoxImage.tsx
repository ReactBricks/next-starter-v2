import React, { useContext, useState, useRef } from 'react'
import { Text, RichText, Image, types, Link } from 'react-bricks/frontend'
import { FiSearch, FiChevronDown } from 'react-icons/fi'

import classNames from 'classnames'
//=============================
// Local Types
//=============================

interface BoxImageProps {
  index: number
}

//=============================
// Component to be rendered
//=============================
const BoxImage: types.Brick<BoxImageProps> = ({ index }) => {
  return (
    <div className="cursor-pointer relative pb-12 mt-8">
      <Image
        propName="boxImage"
        alt="box-image"
        aspectRatio={1.8}
        imageClassName={`object-cover max-w-[680px] hover:ease-in-out hover:scale-[1.01] hover:duration-300 hover:transition-all`}
      />
    </div>
  )
}

//=============================
// Brick Schema
//=============================
BoxImage.schema = {
  name: 'box-image',
  label: 'Box image',
  hideFromAddMenu: true,
  //previewImageUrl: ``,
  getDefaultProps: () => ({}),
  sideEditProps: [
    {
      name: 'href',
      label: 'href',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default BoxImage
