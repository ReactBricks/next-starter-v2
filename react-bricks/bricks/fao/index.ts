import { types } from 'react-bricks/frontend'
import Header from './layout/Header'
import ChapterHero from './ChapterHero'
import Paragraph from './Paragraph'
import HomeHero from './HomeHero'
import Highlights from './Highlights'
import HighlightsItem from './HighlightsItem'
import Chapters from './Chapters'
import ChaptersItem from './ChapterItem'
import BottomHighlights from './BottomHighlights'
import HighlightsLinkItem from './HighlightsLinkItem'
import Footer from './layout/Footer'
import Box from './Box/Box'
import BoxImage from './Box/BoxImage'
import BoxNotes from './Box/BoxNotes'
import BoxParagraph from './Box/BoxParagraph'
import BoxTitle from './Box/BoxTitle'

const faoBricks: types.Brick<any>[] = [
  Header,
  ChapterHero,
  Paragraph,
  HomeHero,
  Highlights,
  HighlightsItem,
  Chapters,
  ChaptersItem,
  BottomHighlights,
  HighlightsLinkItem,
  Footer,
  Box,
  BoxImage,
  BoxNotes,
  BoxParagraph,
  BoxTitle,
]

export default faoBricks
