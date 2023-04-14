import { types } from 'react-bricks/frontend'
import Header from './layout/Header'
import ChapterHero from './ChapterHero'
import Paragraph from './Paragraph'
import HomeHero from './HomeHero'
import Highlights from './Highlights/Highlights'
import HighlightsItem from './Highlights/HighlightsItem'
import Chapters from './Chapters/Chapters'
import ChaptersItem from './Chapters/ChapterItem'
import BottomHighlights from './ BottomHighlights/BottomHighlights'
import HighlightsLinkItem from './ BottomHighlights/HighlightsLinkItem'
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
