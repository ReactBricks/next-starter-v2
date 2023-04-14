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

interface BottomHighlightsProps {}

//=============================
// Component to be rendered
//=============================
const BottomHighlights: types.Brick<BottomHighlightsProps> = ({}) => {
  return (
    <div className="bg-[#005472] flex justify-center">
      <div className="flex  max-w-[calc(552px_-_4rem)] justify-end pr-16 items-center max-h-[200px] overflow-hidden">
        <p className="mr-10 pt-8 text-[1.6rem] rounded-[1.9rem] min-w-[200px] text-white font-bold  font-[trade-gothic-next-condensed,sans-serif]">
          Download the publication in the most common reader formats:
          <br />
          <a
            className="text-center inline-block w-auto py-4 mr-[10px] decoration-white text-white underline text-[2rem]"
            href="https://www.fao.org/3/cc0461en/cc0461en.pdf"
            target="_blank"
            title="download PDF"
          >
            PDF
          </a>
          <a
            className="text-center inline-block w-auto py-4 mr-[10px] decoration-white text-white underline text-[2rem]"
            href="https://doi.org/10.4060/cc0461en"
            title="download MOBI"
          >
            MOBI
          </a>
          <a
            className="text-center inline-block w-auto py-4 mr-[10px] decoration-white text-white underline text-[2rem]"
            href="https://doi.org/10.4060/cc0461en"
            title="download MOBI"
          >
            MOBI
          </a>
        </p>
        <div className="relative top-[20px]  w-[270px] h-[280px] bg-[center_10px] bg-cover  bg-no-repeat bg-[url('http://www.fao.org/3/cc0461en/cc0461en_200.jpg')] overflow-hidden transition-[background] duration-0 ease-linear -rotate-[20deg]"></div>
      </div>

      <div className="max-h-[132px] w-3/5 max-w-[670px] my-auto">
        <Repeater propName="links" />
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
BottomHighlights.schema = {
  name: 'bottom-highlights',
  label: 'BottomHighlights',
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
      name: 'links',
      itemType: 'HighlightsLinkItem',
      itemLabel: 'Highlights link item',
    },
  ],
}

export default BottomHighlights
