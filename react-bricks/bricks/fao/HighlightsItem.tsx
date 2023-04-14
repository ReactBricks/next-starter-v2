import React, { useContext, useState, useRef } from 'react'
import { Text, RichText, Image, types, Link } from 'react-bricks/frontend'
import { FiSearch, FiChevronDown } from 'react-icons/fi'

import classNames from 'classnames'
//=============================
// Local Types
//=============================

interface HighlightsItemProps {}

//=============================
// Component to be rendered
//=============================
const HighlightsItem: types.Brick<HighlightsItemProps> = ({}) => {
  return (
    <Link href={'href'} className="self-center">
      <Text
        renderBlock={(props) => (
          <span className="text-[2rem] font-semibold leading-[1.9rem] no-underline w-auto py-8 font-[trade-gothic-next-condensed,sans-serif]">
            {props.children}
          </span>
        )}
        placeholder="Chapter name..."
        propName="highligthsText"
      />
    </Link>
  )
}

//=============================
// Brick Schema
//=============================
HighlightsItem.schema = {
  name: 'highlightsItem',
  label: 'Highlights item',
  hideFromAddMenu: true,
  //previewImageUrl: ``,
  getDefaultProps: () => ({
    highligthsText: 'KEY MESSAGE',
  }),
  sideEditProps: [
    {
      name: 'href',
      label: 'href',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HighlightsItem
