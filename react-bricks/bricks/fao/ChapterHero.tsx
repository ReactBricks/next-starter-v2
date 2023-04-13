import { StaticImageData } from 'next/image'
import React from 'react'
import { types, Image, Text } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
interface ChapterHeroProps {
  chapterImage: StaticImageData
  chapterName: string
  chapterTitle: string
}

//=============================
// Component to be rendered
//=============================
const ChapterHero: types.Brick<ChapterHeroProps> = ({
  chapterImage,
  chapterName,
  chapterTitle,
}) => {
  return (
    <div className="relative">
      <Image
        alt="Hero Image"
        propName="chapterImage"
        imageClassName="h-[75vh] w-full min-h-[210px] bg-[center_60px] object-cover bg-no-repeat overflow-hidden"
      />

      <div className="absolute text-[#018da0] top-0 bg-white/90 w-[380px] h-full ml-[calc(((100%-1280px)/2)+260px+2rem*2)] break-words py-0 px-8 mr-auto max-w-[680px] flex flex-col items-start justify-center">
        <h2 className="leading-[2.1rem] text-[2.1rem] w-4/5 max-w-[680px] font-black not-italic font-[trade-gothic-next-condensed,sans-serif] z-[98] pt-4 uppercase -tracking-[0.35px] before:w-1/4 before:content-[''] before:h-[10px] before:bg-[#018da0] before:inline-block before:absolute before:top-0 before:left:0 flex flex-col relative">
          <Text
            renderBlock={(props) => (
              <span className="font-normal mb-[1px] text-[0.86em]">
                {props.children}
              </span>
            )}
            placeholder="Chapter name..."
            propName="chapterName"
          />
          <Text
            renderBlock={(props) => <>{props.children}</>}
            placeholder="Chapter title..."
            propName="chapterTitle"
          />
        </h2>
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
ChapterHero.schema = {
  name: 'chapter-hero',
  label: 'ChapterHero',
  //previewImageUrl: ``,
  getDefaultProps: () => ({}),
  sideEditProps: [],
}

export default ChapterHero
