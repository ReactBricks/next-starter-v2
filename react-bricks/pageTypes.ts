import { types } from 'react-bricks/frontend'
import { v4 as uuid } from 'uuid'

const pageTypes: types.IPageType[] = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
  },
  {
    name: 'layout',
    pluralName: 'layout',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    isEntity: true,
  },
  {
    name: 'blog',
    pluralName: 'Blog',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    allowedBlockTypes: [
      'title',
      'paragraph',
      'video',
      'code-block',
      'tweet',
      'tweet-light',
      'image',
    ],
  },
  {
    name: 'product',
    pluralName: 'products',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [
      {
        id: uuid(),
        type: 'default-embed-brick', // or your custom embed brick
        props: {
          [types.EmbedProp]: {
            // mandatory prop of an embed brick
            id: 'fa3393c1-ba80-429c-9316-f1adfd8766cf',
            slug: 'header',
            language: 'en',
          },
        },
        isEmbed: true,
        locked: true, // here we lock the block
        canAddAfter: true, // to the top of the page
      },
    ],
    isEntity: true,
  },
]

export default pageTypes
