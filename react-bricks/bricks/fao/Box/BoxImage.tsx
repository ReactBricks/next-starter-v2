import React from 'react'
import { Image, types } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================

interface BoxImageProps {}

//=============================
// Component to be rendered
//=============================
const BoxImage: types.Brick<BoxImageProps> = ({}) => {
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
  sideEditProps: [],
}

export default BoxImage
