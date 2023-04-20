import React from 'react'
import { Text, RichText, types } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================

interface HomeHeroProps {
  heroTitle: string
  subTitle: string
  text: string
  open: boolean
}

//=============================
// Component to be rendered
//=============================
const HomeHero: types.Brick<HomeHeroProps> = ({ open }) => {
  return (
    <div className="bg-[url('https://www.fao.org/3/cc0461en/online/sofia/img/cover-home-d.jpg')] bg-no-repeat bg-[center_60px] bg-cover h-screen flex items-center flex-col">
      <div className="w-[1280px] flex flex-col text-right items-end justify-center pt-[400px]">
        <RichText
          multiline={true}
          propName="heroTitle"
          placeholder="Title.."
          renderBlock={({ children }) => (
            <h1 className="text-[5.2vh] min-w-[160px] leading-[5.2vh] mr-[12rem] text-white -tracking-[1.86px] drop-shadow-[-3px_5px_8px_#000] font-title">
              {children}
            </h1>
          )}
          renderBold={({ children }) => (
            <b className="text-[9vh] leading-[7.5vh] font-extrabold ">
              {children}
            </b>
          )}
          allowedFeatures={[types.RichTextFeatures.Bold]}
        />
        <div className="h-[34px] mt-[34px] w-[450px] mr-[12rem] bg-gradient-to-r from-transparent via-transparent to-[#018da0]"></div>
        <Text
          propName="subTitle"
          placeholder="Subtitle.."
          renderBlock={({ children }) => (
            <h2 className="text-[3vh] min-w-[100px] leading-[2.8vh] mr-48 drop-shadow-[-1px_3px_5px_#000] text-white mt-8 -tracking-[2px] font-extrabold font-title ">
              {children}
            </h2>
          )}
        />
      </div>
      <img
        src="https://www.fao.org/3/cc0461en/online/sofia/img/caret-down.svg"
        alt=""
        className="absolute w-[150px] bottom-[8rem] cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out hover:scale-110"
      />
    </div>
  )
}

//=============================
// Brick Schema
//=============================
HomeHero.schema = {
  name: 'home-hero',
  label: 'Home hero',
  //previewImageUrl: ``,
  getDefaultProps: () => ({
    heroTitle: 'THE STATE OF WORLD FISHERIES AND AQUACULTURE 2022',
    subTitle: 'TOWARDS BLUE TRANSFORMATION',
  }),
  sideEditProps: [],
}

export default HomeHero