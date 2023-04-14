import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

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
  getDefaultProps: () => ({
    highlights: [
      { highligthsText: 'KEY MESSAGE' },
      { highligthsText: 'FOREWORD' },
      { highligthsText: 'EXECUTIVE SUMMARY' },
    ],
  }),
  sideEditProps: [],
  repeaterItems: [
    {
      name: 'highlights',
      itemType: 'highlightsItem',
      itemLabel: 'Highlights Item',
    },
  ],
}

export default Highlights
