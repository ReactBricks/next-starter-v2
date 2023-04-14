import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
interface BoxProps {}

//=============================
// Component to be rendered
//=============================
const Box: types.Brick<BoxProps> = ({}) => {
  return (
    <div className="w-full flex bg-[#f1eded]">
      <div className="max-w-[680px] mx-auto float-left flex-1 relative font-light text-[1.76rem] leading-[2.7rem] mb-16 pt-12 pb-8">
        <Repeater
          propName="boxTitle"
          renderItemWrapper={(props) => <>{props}</>}
        />
        <Repeater
          propName="boxParagraph"
          renderItemWrapper={(props) => <>{props}</>}
        />
        <Repeater
          propName="boxImage"
          renderItemWrapper={(props) => <>{props}</>}
        />
        <Repeater
          propName="boxNotes"
          renderItemWrapper={(props) => <>{props}</>}
        />
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
  sideEditProps: [],
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
