import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { bgColors } from '../../colors'
import { types } from 'react-bricks/frontend'
import Container from './Container'
import { useTheme } from 'next-themes'
export type Border = 'full' | 'boxed' | 'none'

interface SectionProps {
  backgroundColor?: { color: string; className: string }
  backgroundImage?: types.IImageSource
  backgroundImageDark?: types.IImageSource
  borderTop?: Border
  borderBottom?: Border
  className?: string
  children?: React.ReactNode
  noOverflowX?: boolean
}

const Section: React.FC<SectionProps> = ({
  backgroundColor = bgColors.WHITE.value,
  backgroundImage,
  backgroundImageDark,
  borderTop = 'none',
  borderBottom = 'none',
  className = '',
  noOverflowX = false,
  children,
}) => {
  const bgColor = backgroundColor.className
  const { theme } = useTheme()
  const [imgClass, setImgClass] = useState<string>('')
  useEffect(() => {
    backgroundImage || backgroundImageDark
      ? backgroundImageDark
        ? setImgClass('hero-bg-img')
        : setImgClass('hero-bg-img dark:bg-none')
      : setImgClass('')
  }, [theme])
  let backgroundImageCss = `
      ${
        backgroundImage
          ? `.hero-bg-img { background-image: url(${backgroundImage.src}); }`
          : ``
      }

      ${
        backgroundImageDark
          ? `.dark .hero-bg-img { background-image: url(${backgroundImageDark.src}); }`
          : ``
      }
    `

  return (
    <>
      <style>{backgroundImageCss}</style>
      <section
        className={classNames(
          bgColor,
          className,
          imgClass,
          {
            'overflow-x-hidden': noOverflowX,
          },
          `bg-no-repeat bg-cover bg-center`
        )}
      >
        {borderTop !== 'none' && (
          <Container
            size={borderTop === 'boxed' ? 'medium' : 'full'}
            paddingBottom="0"
            paddingTop="0"
          >
            <hr className="border-black/10" />
          </Container>
        )}
        {children}
        {borderBottom !== 'none' && (
          <Container
            size={borderBottom === 'boxed' ? 'medium' : 'full'}
            paddingBottom="0"
            paddingTop="0"
          >
            <hr className="border-black/10" />
          </Container>
        )}
      </section>
    </>
  )
}

export default Section
