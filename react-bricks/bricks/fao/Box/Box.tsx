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

interface BoxProps {}

//=============================
// Component to be rendered
//=============================
const Box: types.Brick<BoxProps> = ({}) => {
  return (
    <section className="bg-[#f1eded]">
      <Repeater
        propName="boxTitle"
        renderItemWrapper={(props) => (
          <div className="max-w-[680px] mx-auto min-w-[200px]">{props}</div>
        )}
      />
      <Repeater
        propName="boxParagraph"
        renderItemWrapper={(props) => (
          <div className="max-w-[680px] mx-auto">{props}</div>
        )}
      />
      <Repeater
        propName="boxImage"
        renderItemWrapper={(props) => (
          <div className="max-w-[680px] mx-auto">{props}</div>
        )}
      />
      <Repeater
        propName="boxNotes"
        renderItemWrapper={(props) => (
          <div className="max-w-[680px] mx-auto">{props}</div>
        )}
      />
    </section>
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
