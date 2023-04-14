import React, { useContext, useState, useRef } from 'react'
import { Text, RichText, Image, types, Link } from 'react-bricks/frontend'
import { FiSearch, FiChevronDown } from 'react-icons/fi'

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
      <div
        className={classNames(
          index++ % 3 !== 0 ? 'pl-[40px]' : '',
          'inline-block w-4/12 align-middle py-4'
        )}
      >
        <Link
          href={'href'}
          className={classNames('text-left text-white w-4/12')}
        >
          <Text
            renderBlock={(props) => (
              <span
                className={classNames(
                  'text-[1.8rem] leading-[1.9rem] w-4/12 text-left uppercase font-[trade-gothic-next-condensed,sans-serif] font-bold'
                )}
              >
                {props.children}
              </span>
            )}
            placeholder="link..."
            propName="link"
          />
        </Link>
      </div>
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
