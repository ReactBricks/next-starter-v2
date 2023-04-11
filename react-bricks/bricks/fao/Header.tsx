import React, { Children } from 'react'
import { Text, RichText, Image, types, Link } from 'react-bricks/frontend'
import { FiSearch, FiChevronDown } from 'react-icons/fi'
//=============================
// Local Types
//=============================

interface HeaderProps {
  title: string
  text: string
  active: boolean
}

//=============================
// Component to be rendered
//=============================
const Header: types.Brick<HeaderProps> = ({ active }) => {
  return (
    <header className="bg-[#018da0] border-b-white border">
      <div className="min-[1366px]:justify-between min-[1366px]:flex-row xl:max-w-[calc(1280px_-_2rem_*_2)] lg: max-w-[calc(680px_+_260px_+_(2rem))] md:min-w-[680px] flex items-center flex-col max-w-[calc(100vw_-_2rem_*_2) w-full py-0 px-8 my-0 mx-auto min-h-[25px]">
        <div className="min-[1366px]:w-auto min-[1366px]:flex-nowrap min-[1366px]:pb-0 flex w-full justify-start pb-4 relative">
          <Link
            propNmae=""
            href={'https://www.fao.org'}
            target="_blank"
            title="FAO - Food and Agriculture Organization"
          >
            <img
              src=""
              alt=""
              className="md:h-[40px] md:mr-[3.4rem] h-[25px] mr-8"
            />
          </Link>
        </div>
        <div className="min-[1366px]:w-auto flex items-center justify-end w-full bg-[#018da0]">
          <div className="md:h-[60px] md:mr-4 flex justify-end items-center h-[50px] mr-8 overflow-hidden">
            {' '}
            {/*searchBox */}
            <div className="min-[1366px]:min-w-[225px] min-[1366px]:max-w-[225px] md:min-w-[200px] md:max-w-[200px] max-w-[160px] min-w-[160px] mb-[4px]">
              <input
                type="text"
                placeholder="Search"
                className="text-white placeholder-white pr-[12px] border-b-[1px] border-white border-r-0 border-l-0 border-t-0 bg-transparent focus:border-white  focus:ring-0"
              />
              <svg
                width={20}
                height={20}
                viewBox="0 0 13 13"
                fill="white"
                className="inline-block"
              >
                <path d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z"></path>
              </svg>
            </div>
          </div>
          <div className="min-[1366px]:w-[90px] relative flex-1 items-center">
            {' '}
            {/* language */}
            <ul className="-top-3 flex flex-col absolute left-0 list-none z-50">
              <li className="flex cursor-pointer pt-2 pb-[10px] text-white items-center text-left">
                English
                <FiChevronDown className="ml-[8px]" />
              </li>
              <li
                className="pb-2 opacity-1 pl-4 pr-4 bg-white text-left text-[#2b2e34] leading-[2.8rem] font-thin
              "
              >
                French
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-end cursor-pointer w-[38px]">
            <span className="w-[45%] bg-white h-[3px] my-[3px] mx-0 rounded-[10px]"></span>
            <span className="w-[90%] bg-white h-[3px] my-[3px] mx-0 rounded-[10px]"></span>
            <span className="w-[70%] bg-white h-[3px] my-[3px] mx-0 rounded-[10px]"></span>
          </div>
        </div>
      </div>
    </header>
  )
}

//=============================
// Brick Schema
//=============================
Header.schema = {
  name: 'header',
  label: 'Header',
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
}

export default Header
