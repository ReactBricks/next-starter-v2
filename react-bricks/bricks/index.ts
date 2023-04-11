import { types } from 'react-bricks/frontend'
import faoBricks from './fao/index'

const bricks: types.Theme[] = [
  {
    themeName: 'Fao example',
    categories: [
      {
        categoryName: 'publications',
        bricks: [...faoBricks],
      },
    ],
  }, // React Bricks UI
]

export default bricks
