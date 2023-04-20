import React from 'react'
import { Text, types, Link } from 'react-bricks/frontend'

import classNames from 'classnames'
//=============================
// Local Types
//=============================

interface HighlightsLinkItemProps {
  index: number
  href: string
  link: string
}

//=============================
// Component to be rendered
//=============================
const HighlightsLinkItem: types.Brick<HighlightsLinkItemProps> = ({
  index,
  href,
}) => {
  return (
    <div
      className={classNames(
        index === 2 || index === 5 ? 'pl-14' : '',
        'py-2 w-4/12'
      )}
    >
      <Link href={href} className={classNames('text-white w-full')}>
        <Text
          renderBlock={(props) => (
            <span
              className={classNames(
                'text-[1.8rem] leading-[1.9rem] w-full text-left uppercase font-title font-bold'
              )}
            >
              {props.children}
            </span>
          )}
          placeholder="link..."
          propName="link"
        />
      </Link>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
HighlightsLinkItem.schema = {
  name: 'HighlightsLinkItem',
  label: 'Highlights link item',
  hideFromAddMenu: true,
  //previewImageUrl: ``,
  getDefaultProps: () => ({
    link: 'ABOUT THIS PUBLICATION',
  }),
  sideEditProps: [
    {
      name: 'href',
      label: 'href',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HighlightsLinkItem
