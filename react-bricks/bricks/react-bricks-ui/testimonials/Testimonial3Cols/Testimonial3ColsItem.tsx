import * as React from 'react'
import { Image, Plain, Text, types } from 'react-bricks/frontend'
import { avatars } from '../../shared/defaultImages'
import blockNames from '../../blockNames'
import { textColors } from '../../colors'

export interface TestimonialProps {
  authorName: types.TextValue
  authorJobTitle: types.TextValue
  avatarImage: types.IImageSource
  quote: types.TextValue
}

const Testimonial3ColsItem: types.Brick<TestimonialProps> = ({
  authorName,
  authorJobTitle,
  avatarImage,
  quote,
}) => {
  return (
    <div>
      <Text
        renderBlock={(props) => (
          <blockquote className={`leading-7 mb-5 ${textColors.GRAY_700}`}>
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
      <cite className="flex items-center not-italic">
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
              <div className={`text-sm font-extrabold ${textColors.GRAY_800}`}>
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
      </cite>
    </div>
  )
}

Testimonial3ColsItem.schema = {
  name: blockNames.Testimonial3ColsItem,
  label: 'Single Testimonial',
  category: 'testimonials',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    quote: "I'm smart enough to know that I'm dumb.",
    authorName: 'Richard Feynman',
    authorJobTitle: 'Theoretical physicist',
    avatarImage: avatars.PLACEHOLDER1,
  }),
}

export default Testimonial3ColsItem
