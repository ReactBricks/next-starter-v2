import React, { useState, useRef } from 'react'
import { types, Link } from 'react-bricks/frontend'
import { FiChevronDown } from 'react-icons/fi'
import useOnClickOutside from './useClickOutside'
import classNames from 'classnames'

//=============================
// Local Types
//=============================
interface HeaderProps {
  title: string
  text: string
  open: boolean
}

//=============================
// Component to be rendered
//=============================
const Header: types.Brick<HeaderProps> = ({ open }) => {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => setLanguageMenuOpen(false))
  return (
    <header className="bg-[#018da0] border-b-white w-full border-b fixed z-[100] py-[10px]">
      <div className="max-w-[calc(1280px_-_2rem_*_2)] flex justify-between items-center px-8 mx-auto">
        <Link
          propname=""
          href={'https://www.fao.org'}
          target="_blank"
          title="FAO - Food and Agriculture Organization"
        >
          <img
            src="	https://www.fao.org/3/cc0461en/online/sofia/img/logo-white.svg"
            alt=""
            className="h-[40px] mr-8"
          />
        </Link>

        <div className="flex items-center bg-[#018da0]">
          <div className="flex justify-end items-center overflow-hidden">
            {' '}
            {/*searchBox */}
            <div className="w-[200px] mb-[4px]">
              <input
                type="text"
                placeholder="Search"
                className="max-w-[150px] mr-[12px] text-[13px] font-bold text-white placeholder-white placeholder:text-[16px] placeholder:font-semibold pr-[12px] border-b-[1px] border-white border-r-0 border-l-0 border-t-0 bg-transparent focus:border-white  focus:ring-0"
              />
              <svg
                width={20}
                height={20}
                viewBox="0 0 13 13"
                fill="white"
                className="inline-block ml-[6px] cursor-pointer"
              >
                <path d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z"></path>
              </svg>
            </div>
          </div>
          <div ref={ref}>
            <div
              className="max-w-[80px] relative flex-1 items-center"
              onClick={() => setLanguageMenuOpen((current) => !current)}
            >
              {' '}
              {/* language */}
              <ul className="-top-5 flex flex-col last:gap-y-3 absolute left-0 list-none z-50">
                <li className="flex mb-2 cursor-pointer pt-2 pl-4 pr-4 text-white items-center text-[1.6rem] font-semibold font-[trade-gothic-next-condensed,sans-serif] text-left">
                  English
                  <FiChevronDown size={20} className="ml-[8px] mt-2" />
                </li>
                <div>
                  <li
                    className={classNames(
                      languageMenuOpen ? 'opacity-1' : 'opacity-0',
                      'pb-2 pt-2 opacity-1 pl-4 pr-4 bg-white font-[trade-gothic-next-condensed,sans-serif] text-left text-[#2b2e34] text-[1.4rem] font-semibold hover:text-[#018da0] transition-opacity ease-linear duration-300'
                    )}
                  >
                    <a href="">العربية</a>
                  </li>
                  <li
                    className={classNames(
                      languageMenuOpen ? 'opacity-1' : 'opacity-0',
                      'pb-2 pt-2 opacity-1 pl-4 pr-4 bg-white font-[trade-gothic-next-condensed,sans-serif] text-left text-[#2b2e34] text-[1.4rem] font-semibold hover:text-[#018da0] transition-opacity ease-linear duration-300'
                    )}
                  >
                    <a href="">中文</a>
                  </li>
                  <li
                    className={classNames(
                      languageMenuOpen ? 'opacity-1' : 'opacity-0',
                      'pb-2 pt-2 opacity-1 pl-4 pr-4 bg-white font-[trade-gothic-next-condensed,sans-serif] text-left text-[#2b2e34] text-[1.4rem] font-semibold hover:text-[#018da0] transition-opacity ease-linear duration-300'
                    )}
                  >
                    <a href="">Français</a>
                  </li>
                  <li
                    className={classNames(
                      languageMenuOpen ? 'opacity-1' : 'opacity-0',
                      'pb-2 pt-2 opacity-1 pl-4 pr-4 bg-white font-[trade-gothic-next-condensed,sans-serif] text-left text-[#2b2e34] text-[1.4rem]  hover:text-[#018da0] transition-opacity ease-linear duration-300'
                    )}
                  >
                    <a href="">Русский</a>
                  </li>
                  <li
                    className={classNames(
                      languageMenuOpen ? 'opacity-1' : 'opacity-0',
                      'pb-2 pt-2 opacity-1 pl-4 pr-4 bg-white font-[trade-gothic-next-condensed,sans-serif] text-left text-[#2b2e34] text-[1.4rem] font-semibold hover:text-[#018da0] transition-opacity ease-linear duration-300'
                    )}
                  >
                    <a href="">Español</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-end cursor-pointer w-[38px] ml-[110px]">
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
  sideEditProps: [],
}

export default Header
