import React, { useContext, useState, useRef } from 'react'
import { Text, RichText, Image, types, Link } from 'react-bricks/frontend'
import { FiSearch, FiChevronDown } from 'react-icons/fi'

import classNames from 'classnames'
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
    <h3 id={anchorTag} className="border-b border-white py-8 mb-4">
      <span className="float-left mr-[8px]">
        <Text
          propName="boxName"
          placeholder="name.."
          renderBlock={({ children }) => (
            <h3 className="px-[7px] pb-[2px] min-w-[50px] text-white font-[trade-gothic-next-condensed,sans-serif] bg-[#018da0]">
              {children}
            </h3>
          )}
        />
      </span>

      <div>
        <Text
          multiline={true}
          propName="boxTitle"
          placeholder="title.."
          renderBlock={({ children }) => (
            <h3 className="font-bold font-[trade-gothic-next-condensed,sans-serif] text-[1.2rem]">
              {children}
            </h3>
          )}
        />
      </div>
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
