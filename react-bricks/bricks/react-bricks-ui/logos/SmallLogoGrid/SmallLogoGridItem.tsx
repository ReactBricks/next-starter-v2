import classNames from 'classnames'
import * as React from 'react'
import { Image, Link, types } from 'react-bricks/frontend'
import { iconLogos } from '../../shared/defaultImages'
import blockNames from '../../blockNames'

export interface SmallLogoGridItemProps {
  link: string
  targetBlank: boolean
  logo: types.IImageSource
}

interface ContentProps {
  logo: types.IImageSource
}

const Content: React.FC<ContentProps> = ({ logo }) => (
  <div className="content-none pb-[100%] relative">
    <Image
      propName="image"
      alt="customer"
      source={logo}
      imageClassName="absolute top-0 left-0 w-full h-full object-contain"
    />
  </div>
)

const SmallLogoGridItem: types.Brick<SmallLogoGridItemProps> = ({
  link,
  targetBlank,
  logo,
}) => {
  return (
    <Link
      href={link}
      target={targetBlank ? '_blank' : '_self'}
      className="rounded-md p-1"
    >
      <Content logo={logo} />
    </Link>
  )
}

SmallLogoGridItem.schema = {
  name: blockNames.SmallLogoGridItem,
  label: 'Logo',
  category: 'logos',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Customers/CustomerItem.tsx',

  getDefaultProps: () => ({
    image: iconLogos.REACT_BRICKS,
    link: 'https://reactbricks.com',
  }),
  sideEditProps: [
    {
      name: 'link',
      label: 'Link (external or path)',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default SmallLogoGridItem
