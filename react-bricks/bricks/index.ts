import { types } from 'react-bricks/frontend'
import reactBricksUITheme from './react-bricks-ui'
import HeroUnit from './custom/MyHeroUnit'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit], // Custom Bricks
      },
    ],
  },
]

export default bricks
