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
import useOnClickOutside from './useClickOutside'
import classNames from 'classnames'
//=============================
// Local Types
//=============================

interface HighlightsProps {}

//=============================
// Component to be rendered
//=============================
const Highlights: types.Brick<HighlightsProps> = ({}) => {
  return (
    <div className="bg-[#018da0]">
      <div className="max-w-[720px] min-h-[79px] flex justify-center items-center mx-auto text-white">
        <Repeater
          propName="highlights"
          renderItemWrapper={(props) => (
            <div
              className={`flex-1 flex justify-center border-r-[2px] border-dotted border-white  h-[65px] last:border-0 cursor-pointer`}
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
Highlights.schema = {
  name: 'highlights',
  label: 'Highlights',
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
      name: 'highlights',
      itemType: 'highlightsItem',
      itemLabel: 'Highlights Item',
    },
  ],
}

export default Highlights
