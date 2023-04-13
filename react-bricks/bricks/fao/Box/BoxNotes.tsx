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

interface BoxNotesProps {
  index: number
  boxNotes: string
}

//=============================
// Component to be rendered
//=============================
const BoxNotes: types.Brick<BoxNotesProps> = ({ index }) => {
  return (
    <RichText
      renderLink={(props) => (
        <a href={`#${props.href}`} className="text-[#018da0]">
          {props.children}
        </a>
      )}
      renderOL={(props) => (
        <ol className="list-decimal list-outside ml-2">{props.children}</ol>
      )}
      renderLI={(props) => <li className="cursor-pointer">{props.children}</li>}
      renderBlock={(props: any) => (
        <p className="text-xl font-light font-[trade-gothic-next-condensed,sans-serif]">
          {props.children}
        </p>
      )}
      placeholder="Type a text..."
      propName="boxParagraph"
      allowedFeatures={[
        types.RichTextFeatures.Link,
        types.RichTextFeatures.OrderedList,
      ]}
    />
  )
}

//=============================
// Brick Schema
//=============================
BoxNotes.schema = {
  name: 'box-notes',
  label: 'Box notes',
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

export default BoxNotes
