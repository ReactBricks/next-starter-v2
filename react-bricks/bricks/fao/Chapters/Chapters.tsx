import React, { useContext, useState, useRef } from 'react'
import {
  Text,
  RichText,
  Image,
  types,
  Link,
  Repeater,
} from 'react-bricks/frontend'
import { FiSearch, FiChevronDown } from 'react-icons/fi'

import classNames from 'classnames'
//=============================
// Local Types
//=============================

interface ChaptersProps {}

//=============================
// Component to be rendered
//=============================
const Chapters: types.Brick<ChaptersProps> = ({}) => {
  return (
    <div className="bg-[#018da0]">
      <div className="flex flex-nowrap mx-auto border-t-[1px] border-white border-b-[1px] justify-center">
        <Repeater
          propName="chapters"
          renderItemWrapper={(props) => (
            <div
              className={`max-w-[267px] border-l-[1px] border-white pb-16 last:border-r-[1px]`}
            >
              {props}
            </div>
          )}
        />
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
Chapters.schema = {
  name: 'chapters',
  label: 'Chapters',
  //previewImageUrl: ``,
  getDefaultProps: () => ({}),
  sideEditProps: [
    {
      name: '',
      label: '',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '', label: '' },
          { value: '', label: '' },
        ],
      },
    },
  ],
  repeaterItems: [
    {
      name: 'chapters',
      itemType: 'chapter-item',
      itemLabel: 'Chapter item',
    },
  ],
}

export default Chapters
