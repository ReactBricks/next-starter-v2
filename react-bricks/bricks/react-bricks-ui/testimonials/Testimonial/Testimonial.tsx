import * as React from 'react'
import { Image, Plain, Text, types } from 'react-bricks/frontend'

import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import { avatars, iconLogos } from '../../shared/defaultImages'
import blockNames from '../../blockNames'
import { textColors } from '../../colors'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'

export interface TestimonialProps extends LayoutProps {
  authorName: types.TextValue
  authorJobTitle: types.TextValue
  avatarImage: types.IImageSource
  logoImage: types.IImageSource
  quote: types.TextValue
}

const Testimonial: types.Brick<TestimonialProps> = ({
  authorName,
  authorJobTitle,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  quote,
  avatarImage,
  logoImage,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size="small"
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="flex flex-col justify-center items-center"
      >
        <Text
          renderBlock={(props) => (
            <blockquote
              className={`text-xl leading-8 text-center mb-6 max-w-[480px] ${textColors.GRAY_700}`}
            >
              {props.children}
            </blockquote>
          )}
          placeholder="Quote..."
          renderPlaceholder={(props) => {
            return <span>{props.children}</span>
          }}
          propName="quote"
          value={quote}
        />
        <cite className="flex items-center justify-center not-italic">
          <Image
            alt={
              typeof authorName === 'string'
                ? authorName
                : Plain.serialize(authorName)
            }
            propName="avatarImage"
            source={avatarImage}
            aspectRatio={1}
            imageClassName="rounded-full w-10 h-10 object-contain"
          />

          <div className="ml-3 dark:text-gray-200 min-w-[90px]">
            <Text
              renderBlock={(props) => (
                <div
                  className={`text-sm font-extrabold ${textColors.GRAY_800}`}
                >
                  {props.children}
                </div>
              )}
              placeholder="Name..."
              propName="authorName"
              value={authorName}
            />
            <Text
              renderBlock={(props) => (
                <div className={`text-xs ${textColors.GRAY_600}`}>
                  {props.children}
                </div>
              )}
              placeholder="Job title..."
              propName="authorJobTitle"
              value={authorJobTitle}
            />
          </div>

          <Image
            alt={
              typeof authorJobTitle === 'string'
                ? authorJobTitle
                : Plain.serialize(authorJobTitle)
            }
            propName="logoImage"
            source={logoImage}
            imageClassName="w-20 h-10 object-contain object-left"
            renderWrapper={({ children }) => (
              <div className="ml-5 pl-5 border-l border-gray-300">
                {children}
              </div>
            )}
          />
        </cite>
      </Container>
    </Section>
  )
}

Testimonial.schema = {
  name: blockNames.Testimonial,
  label: 'Testimonial',
  category: 'testimonials',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Testimonial/Testimonial.tsx',
  previewImageUrl: `/bricks-preview-images/${blockNames.Testimonial}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    borderTop: 'boxed',
    paddingBottom: '20',
    quote:
      'React Bricks allowed us to quickly create a beautiful website that drives business goals and is easy to maintain. No one from the marketing team would ever go back!',
    authorName: 'Matteo Frana',
    authorJobTitle: 'Founder @ React Bricks',
    avatarImage: avatars.MATTEO_FRANA,
    logoImage: iconLogos.REACT_BRICKS,
  }),
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup],
}

export default Testimonial
