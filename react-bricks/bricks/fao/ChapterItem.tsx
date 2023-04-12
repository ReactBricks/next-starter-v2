import React, { useContext, useState, useRef } from 'react'
import { Text, RichText, Image, types, Link } from 'react-bricks/frontend'
import { FiSearch, FiChevronDown } from 'react-icons/fi'
import useOnClickOutside from './useClickOutside'
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
      <div className="p-4">
        <Text
          renderBlock={(props) => (
            <span
              className={classNames(
                '-tracking-[1px] font-[trade-gothic-next-condensed,sans-serif] text-white font-light mb-0.5 absolute  min-w-[120px] text-lg before:w-[60px] before:bg-white before:h-[6px] before:absolute',
                index % 2 === 0
                  ? 'before:-top-[4px] before:left-0 top-[10px]'
                  : ' before:-top-[4px] before:left-0 -top-[15px]'
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
                index % 2 !== 0 ? '-mt-3.5' : 'mt-2.5',
                'text-xl font-extrabold text-white -tracking-[2px]'
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
