import { types } from 'react-bricks/frontend'
import reactBricksUITheme from './react-bricks-ui'
import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit], // Custom Bricks
      },
      {
        categoryName: 'Pokemon',
        bricks: [Pokemon], // External data Bricks
      },
    ],
  },
]

export default bricks
