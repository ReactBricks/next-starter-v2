import React, { useState, useRef, useContext } from 'react'
import {
  Image,
  Repeater,
  types,
  Link,
  ReactBricksContext,
} from 'react-bricks/frontend'
import { FiMenu, FiX } from 'react-icons/fi'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import blockNames from '../blockNames'
import { bgColors, buttonColors } from '../colors'
import {
  backgroundColorsEditProps,
  borderBottomEditProp,
  LayoutProps,
  sectionDefaults,
} from '../LayoutSideProps'
import Section from '../shared/components/Section'
import useOnClickOutside from './useClickOutside'
import { useTheme } from 'next-themes'

interface HeaderProps extends LayoutProps {
  menuItems: any[]
  logo: types.IImageSource
  buttons: any[]
}

const Header: types.Brick<HeaderProps> = ({
  backgroundColor,
  borderBottom,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDarkColorMode, toggleColorMode } = useContext(ReactBricksContext)

  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => setMobileMenuOpen(false))

  return (
    <Section
      backgroundColor={backgroundColor}
      borderBottom={borderBottom ? 'full' : 'none'}
    >
      <nav className="py-5 px-5 sm:mx-[5.55555%] xl:mx-[11.1111%] flex justify-start items-center">
        <Link
          href="/"
          aria-label="home"
          className="inline-flex py-1.5 px-2 mr-6"
        >
          <Image
            propName="logo"
            alt="Logo"
            maxWidth={300}
            imageClassName="block w-32 h-7 object-contain object-left"
          />
        </Link>
        <div className="hidden lg:flex items-center space-x-2">
          <Repeater
            propName="menuItems"
            itemProps={{ mobileRef: ref, setMobileMenuOpen }}
          />
        </div>
        <div className="hidden lg:block ml-auto">
          <Repeater
            propName="buttons"
            renderWrapper={(items) => (
              <div className="flex flex-row space-x-5 items-center justify-end">
                {items}
              </div>
            )}
          />
        </div>
        <div className="relative ml-auto lg:hidden flex items-center h-full sm:gap-x-4">
          {/* DARK MODE BUTTON MOBILE */}
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 mr-4 sm:mr-0 sm:ml-4 md:ml-8 text-gray-400 dark:text-gray-200"
            onClick={toggleColorMode}
          >
            {!isDarkColorMode ? (
              <BsSunFill className="text-xl" />
            ) : (
              <BsMoonFill />
            )}
          </button>

          <button
            className="group p-1 w-7 h-7 flex justify-center items-center rounded-[5px] bg-gray-200 dark:bg-transparent hover:bg-sky-500/20 dark:hover:bg-sky-500/40 hover:text-sky-600 dark:hover:text-sky-500 focus:bg-sky-500/20 dark:focus:bg-sky-500/40 focus:text-sky-600 dark:focus:text-sky-500"
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? (
              <FiX className="text-gray-600 dark:text-white" size={18} />
            ) : (
              <FiMenu className="text-gray-600 dark:text-white" size={20} />
            )}
          </button>
          {mobileMenuOpen && (
            <div
              ref={ref}
              className="absolute top-8 right-0 w-64 bg-white p-5 border rounded-lg shadow-lg z-10"
            >
              <Repeater
                propName="menuItems"
                itemProps={{
                  mobileRef: ref,
                  setMobileMenuOpen,
                }}
              />
            </div>
          )}
        </div>

        {/* DARK MODE BUTTON DESKTOP */}
        <button
          type="button"
          className="hidden lg:flex items-center justify-center w-8 h-8 mr-4 sm:mr-0 sm:ml-4 md:ml-8 text-gray-400 dark:text-gray-200"
          onClick={toggleColorMode}
        >
          {!isDarkColorMode ? (
            <BsSunFill className="text-xl" />
          ) : (
            <BsMoonFill />
          )}
        </button>
      </nav>
    </Section>
  )
}

Header.schema = {
  name: blockNames.Header,
  label: 'Header',
  category: 'layout',
  tags: ['header', 'menu'],
  previewImageUrl: `/bricks-preview-images/${blockNames.Header}.png`,
  repeaterItems: [
    {
      name: 'menuItems',
      itemType: blockNames.HeaderMenuItem,
      itemLabel: 'Item',
      min: 0,
      max: 6,
    },
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [backgroundColorsEditProps, borderBottomEditProp],
    },
  ],
  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderBottom: 'none',
    menuItems: [
      {
        linkPath: '/',
        linkText: 'Home',
      },
      {
        linkPath: '/about-us',
        linkText: 'About us',
      },
      {
        linkPath: '',
        linkText: 'Features',
        submenuItems: [
          {
            linkText: 'Visual editing',
            linkDescription:
              'The best visual experience for your content editors',
            linkPath: '/',
          },
        ],
      },
    ],
    logo: {
      src: 'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      srcSet: '',
      width: 450,
      height: 100,
      alt: 'React Bricks',
      seoName: 'react-bricks',
    },
    buttons: [
      {
        text: 'Edit content',
        href: '/admin',
        isTargetBlank: false,
        buttonColor: buttonColors.SKY.value,
        type: 'solid',
        padding: 'small',
      },
    ],
  }),
  stories: [
    {
      id: 'header-dark',
      name: 'Header dark',
      previewImageUrl: `/bricks-preview-images/header-dark.png`,
      showAsBrick: true,
      props: {
        ...sectionDefaults,
        borderBottom: 'none',
        backgroundColor: bgColors.DARK_GRAY.value,
        menuItems: [
          {
            linkPath: '/docs',
            linkText: 'Docs',
          },
          {
            linkPath: '/contacts',
            linkText: 'Contacts',
          },
        ],
        logo: {
          src: 'https://images.reactbricks.com/original/881feb54-54af-46d5-8825-31e22ccbac25.webp',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/881feb54-54af-46d5-8825-31e22ccbac25.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-600.webp 600w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-450.webp 450w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-300.webp 300w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-150.webp 150w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-75.webp 75w',
          width: 5314,
          height: 1181,
          alt: 'React Bricks',
          seoName: 'react-bricks',
          fallbackSrc:
            'https://images.reactbricks.com/original/881feb54-54af-46d5-8825-31e22ccbac25.png',
          fallbackSrcSet:
            'https://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-600.png 600w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-450.png 450w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-300.png 300w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-150.png 150w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-75.png 75w',
          fallbackType: 'image/png',
        },
        buttons: [],
      },
    },
  ],
}

export default Header
