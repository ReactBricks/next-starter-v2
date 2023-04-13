import classNames from 'classnames'
import dayjs from 'dayjs'
import React from 'react'
import { Text, types, usePageValues } from 'react-bricks/frontend'
import DefaultAvatar from './DefaultAvatar'
import Section from '../../shared/components/Section'
import Container from '../../shared/components/Container'
import blockNames from '../../blockNames'
import { textColors } from '../../colors'
import { LayoutProps, sectionDefaults } from '../../LayoutSideProps'

export interface BlogTitleProps extends LayoutProps {
  title?: string
}

const BlogTitle: types.Brick<BlogTitleProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
}) => {
  const [pageValues] = usePageValues()
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <Text
          metaFieldName="title"
          renderBlock={(prop) => {
            return (
              <h1
                className={classNames(
                  'text-[40px] leading-tight font-bold',
                  textColors.GRAY_800
                )}
              >
                {prop.children}
              </h1>
            )
          }}
          placeholder="Post title"
        />
        <Text
          metaFieldName="description"
          renderBlock={(prop) => {
            return (
              <h2
                className={classNames(
                  'text-[20px] leading-8 mt-3 mb-6',
                  textColors.GRAY_800
                )}
              >
                {prop.children}
              </h2>
            )
          }}
          placeholder="Post subtitle"
        />

        <div className="flex items-center space-x-2">
          {pageValues.author.avatarUrl ? (
            <img
              src={pageValues.author.avatarUrl}
              alt="Author"
              className="rounded-full w-10 h-10"
            />
          ) : (
            <DefaultAvatar className="rounded-full w-10 h-10" />
          )}
          <div>
            <div
              className={classNames(
                'text-sm leading-4 font-bold',
                textColors.GRAY_800
              )}
            >
              {pageValues.author.firstName || 'John'}{' '}
              {pageValues.author.lastName || 'Doe'}
            </div>
            <div
              className={classNames(
                'text-xs leading-4 mt-0.5',
                textColors.GRAY_500
              )}
            >
              {dayjs(pageValues.publishedAt || new Date()).format(
                'MMMM DD, YYYY'
              )}
            </div>
          </div>

          {/* If you want the author to be editable instead of the author from react Bricks, uncomment below */}
          {/* <Image
            propName="authorImage"
            alt="Author name"
            imageClassName="rounded-full w-12"
          /> */}

          {/* <Text
            propName="author"
            renderBlock={prop => {
              return (
                <div className="text-gray-700 dark:text-gray-200">
                  {prop.children}
                </div>
              )
            }}
            placeholder="Type an author..."
          /> */}
        </div>
      </Container>
    </Section>
  )
}

BlogTitle.schema = {
  name: blockNames.BlogTitle,
  label: 'Blog Title',
  category: 'single column / blog',
  tags: ['blog', 'title', 'blog title'],
  playgroundLinkLabel: 'View source code on Github',
  previewImageUrl: `/bricks-preview-images/${blockNames.BlogTitle}.png`,
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/BlogTitle/BlogTitle.tsx',
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    paddingTop: '12',
    paddingBottom: '8',
    title: 'A new fresh post',
    subtitle: 'With a beautiful subtitle',
  }),
}

export default BlogTitle
