import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
interface BoxProps {
  anchorTag: string
}

//=============================
// Component to be rendered
//=============================
const Box: types.Brick<BoxProps> = ({ anchorTag }) => {
  return (
    <div id={anchorTag} className="w-full flex bg-[#f1eded] pt-6">
      <div className="max-w-[680px] mx-auto float-left flex-1 relative font-light text-[1.76rem] leading-[2.7rem] mb-16 pt-12 pb-8">
        <Repeater propName="boxTitle" />
        <Repeater propName="boxParagraph" />
        <Repeater propName="boxImage" />
        <Repeater propName="boxNotes" />
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
Box.schema = {
  name: 'box',
  label: 'Box',
  //previewImageUrl: ``,
  getDefaultProps: () => ({}),
  sideEditProps: [
    {
      name: 'anchorTag',
      label: 'Anchor tag',
      type: types.SideEditPropType.Text,
    },
  ],
  repeaterItems: [
    {
      name: 'boxTitle',
      itemType: 'box-title',
      itemLabel: 'Box title',
    },
    {
      name: 'boxParagraph',
      itemType: 'box-paragraph',
      itemLabel: 'Box paragraph',
    },
    {
      name: 'boxImage',
      itemType: 'box-image',
      itemLabel: 'Box image',
    },
    {
      name: 'boxNotes',
      itemType: 'box-notes',
      itemLabel: 'Box notes',
    },
  ],
}

export default Box