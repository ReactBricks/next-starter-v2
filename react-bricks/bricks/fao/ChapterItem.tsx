import React, { useContext, useState, useRef } from 'react'
import { Text, RichText, Image, types, Link } from 'react-bricks/frontend'
import { FiSearch, FiChevronDown } from 'react-icons/fi'

import classNames from 'classnames'
//=============================
// Local Types
//=============================

interface ChaptersItemProps {
  index: number
}

//=============================
// Component to be rendered
//=============================
const ChaptersItem: types.Brick<ChaptersItemProps> = ({ index }) => {
  return (
    <Link href={'href'} className="self-center">
      <Image
        propName="chapterImage"
        alt="logo"
        aspectRatio={1}
        imageClassName={`object-contain`}
        renderWrapper={(props) => (
          <div
            className={classNames(
              index % 2 === 0 ? 'mt-[30px]' : 'mb-[30px]',
              'h-[271px] w-full'
            )}
          >
            {props.children}
          </div>
        )}
      />
      <div className="p-4 relative">
        <Text
          renderBlock={(props) => (
            <span
              className={classNames(
                '-tracking-[1px] font-[trade-gothic-next-condensed,sans-serif] text-white font-light mb-0.5 absolute min-w-[120px] text-[1.8rem] before:w-[60px] before:bg-white before:h-[6px] before:absolute',
                index % 2 === 0
                  ? 'before:-top-[8px] before:left-0 top-[10px]'
                  : ' before:-top-[8px] before:left-0 -top-[15px]'
              )}
            >
              {props.children}
            </span>
          )}
          placeholder="Chapter name..."
          propName="chapterName"
        />
        <Text
          propName="ChapterTitle"
          placeholder="Chapter title..."
          renderBlock={(props) => (
            <div
              className={classNames(
                index % 2 !== 0
                  ? '-mt-3.5 mt-[1px] leading-[20px]'
                  : 'mt-10 leading-[20px]',
                'text-[2.3rem] font-bold text-white font-[trade-gothic-next-condensed,sans-serif]'
              )}
            >
              {props.children}
            </div>
          )}
        />
      </div>
    </Link>
  )
}

//=============================
// Brick Schema
//=============================
ChaptersItem.schema = {
  name: 'chapter-item',
  label: 'Chapter item',
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

export default ChaptersItem
