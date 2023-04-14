import React from 'react'
import { types } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
interface FooterProps {
  title: string
  text: string
}

//=============================
// Component to be rendered
//=============================
const Footer: types.Brick<FooterProps> = ({}) => {
  return (
    <footer className="bg-[#018da0] border-t-white  border-t w-full  py-8 flex font-bold justify-between ">
      <div className="flex flex-1 text-white max-w-[calc(1280px_-_2rem_*_2)] mx-auto justify-between ">
        <div className="flex flex-col justify-end">
          <div>
            <a
              className="hover:underline text-[1.8rem] text-white leading-[2.1rem] font-extrabold font-[trade-gothic-next-condensed,sans-serif] self-center"
              target="_blank"
              href="https://www.fao.org"
              title="www.fao.org"
            >
              www.fao.org
            </a>
            |
            <a
              className="hover:underline text-[1.8rem] leading-[2.1rem] font-extrabold text-white font-[trade-gothic-next-condensed,sans-serif] self-center"
              href="mailto:publications@fao.org"
              title="publications@fao.org"
            >
              publications@fao.org
            </a>
          </div>
        </div>
        <a
          className="self-center"
          href="https://www.fao.org/publications/flagships/en/"
          target="_blank"
          title="The state of the world - FAO flaghsip publications"
        >
          <img
            className="h-[88px]"
            src="https://www.fao.org/3/cc0461en/online/sofia/img/state_of_the_world.jpg"
            title="The state of the world"
          />
        </a>
      </div>
    </footer>
  )
}

//=============================
// Brick Schema
//=============================
Footer.schema = {
  name: 'footer',
  label: 'Footer',
  //previewImageUrl: ``,
  getDefaultProps: () => ({}),
  sideEditProps: [],
}

export default Footer