import React, { useContext, useState, useRef } from 'react'
import { Text, RichText, Image, types, Link } from 'react-bricks/frontend'
import { FiSearch, FiChevronDown } from 'react-icons/fi'
import useOnClickOutside from './useClickOutside'
import classNames from 'classnames'
//=============================
// Local Types
//=============================

interface HighlightsLinkItemProps {
  index: number
  href: string
  link: string
}

//=============================
// Component to be rendered
//=============================
const HighlightsLinkItem: types.Brick<HighlightsLinkItemProps> = ({
  index,
}) => {
  return (
    console.log(index),
    (
      <Link
        href={'href'}
        className={classNames(
          index === 0 || index === 1 || index === 2 ? '' : 'pl-[20px]',
          'text-left text-white py-1.5'
        )}
      >
        <Text
          renderBlock={(props) => (
            <span
              className={classNames(
                'text-lg w-4/12 text-left uppercase font-[trade-gothic-next-condensed,sans-serif] font-bold'
              )}
            >
              {props.children}
            </span>
          )}
          placeholder="link..."
          propName="link"
        />
      </Link>
    )
  )
}

//=============================
// Brick Schema
//=============================
HighlightsLinkItem.schema = {
  name: 'HighlightsLinkItem',
  label: 'Highlights link item',
  hideFromAddMenu: true,
  //previewImageUrl: ``,
  getDefaultProps: () => ({
    link: 'ABOUT THIS PUBLICATION',
  }),
  sideEditProps: [
    {
      name: 'href',
      label: 'href',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HighlightsLinkItem
