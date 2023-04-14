import React from 'react'
import { Text, types } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
interface BoxTitleProps {
  index: number
  boxTitle: string
  boxName: string
  anchorTag: string
}

//=============================
// Component to be rendered
//=============================
const BoxTitle: types.Brick<BoxTitleProps> = ({ anchorTag }) => {
  return (
    <h3
      id={anchorTag}
      className="font-bold font-[trade-gothic-next-condensed,sans-serif;] text-[1.8rem] uppercase leading-[2.2rem] border-b border-white py-8 mb-4"
    >
      <Text
        propName="boxName"
        placeholder="name.."
        renderBlock={({ children }) => (
          <span className="inline-block px-[7px] pb-[2px] mr-[8px] font-bold leading-[0.9em] uppercase text-white bg-[#018da0]">
            {children}
          </span>
        )}
      />

      <Text
        multiline={true}
        propName="boxTitle"
        placeholder="title.."
        renderBlock={({ children }) => <>{children}</>}
      />
    </h3>
  )
}

//=============================
// Brick Schema
//=============================
BoxTitle.schema = {
  name: 'box-title',
  label: 'Box title',
  hideFromAddMenu: true,
  //previewImageUrl: ``,
  getDefaultProps: () => ({
    boxName: 'BOX 1',
    boxTitle:
      'MORE THAN SEVEN DECADES OF FAO FISHERIES AND AQUACULTURE STATISTICS: 1950-2020',
  }),
  sideEditProps: [
    {
      name: 'anchorTag',
      label: 'Anchor tag',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default BoxTitle
