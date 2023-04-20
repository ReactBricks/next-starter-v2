import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================

interface ChaptersProps {}

//=============================
// Component to be rendered
//=============================
const Chapters: types.Brick<ChaptersProps> = ({}) => {
  return (
    <div className="bg-[#018da0]">
      <div className="flex flex-nowrap mx-auto border-t-[1px] border-white border-b-[1px] justify-center">
        <Repeater
          propName="chapters"
          renderItemWrapper={(props) => (
            <div
              className={`max-w-[267px] border-l-[1px] border-white pb-16 last:border-r-[1px]`}
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
Chapters.schema = {
  name: 'chapters',
  label: 'Chapters',
  //previewImageUrl: ``,
  getDefaultProps: () => ({
    chapters: [
      {
        chapterTitle: 'WORLD REVIEW',
        chapterName: 'PART 1',
      },
      {
        chapterTitle: 'TOWARDS BLUE TRANSFORMATION',
        chapterName: 'PART 2',
        chapterImage: '',
      },
      {
        chapterTitle:
          'BLUE TRANSFORMATION TO ACHIEVE THE 2030 AGENDA FOR SUSTAINABLE DEVELOPMENT',
        chapterName: 'PART 3',
      },
      { chapterTitle: 'EMERGING ISSUES AND OUTLOOK', chapterName: 'PART 4' },
    ],
  }),

  sideEditProps: [],
  repeaterItems: [
    {
      name: 'chapters',
      itemType: 'chapter-item',
      itemLabel: 'Chapter item',
      getDefaultProps() {
        return { chapterTitle: 'WORLD REVIEW', chapterName: 'PART 1' }
      },
    },
  ],
}

export default Chapters
