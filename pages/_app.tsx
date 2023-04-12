import { useState } from 'react'
import { ReactBricks } from 'react-bricks/frontend'
import type { AppProps } from 'next/app'
import config from '../react-bricks/config'
import { ThemeProvider } from 'next-themes'

import '../css/styles.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Color Mode Management
  const savedColorMode =
    typeof window === 'undefined' ? '' : localStorage.getItem('color-mode')
  const [colorMode, setColorMode] = useState(savedColorMode || 'light')
  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light'
    setColorMode(newColorMode)
    localStorage.setItem('color-mode', newColorMode)
  }

  const reactBricksConfig = {
    ...config,
    isDarkColorMode: colorMode === 'dark',
    toggleColorMode,
    contentClassName: `antialiased font-content ${colorMode} ${
      colorMode === 'dark' ? 'dark bg-gray-900' : 'light bg-white'
    }`,
  }

  return (
    <ReactBricks {...reactBricksConfig}>
      <ThemeProvider attribute="class" storageKey="color-mode">
        <Component {...pageProps} />
      </ThemeProvider>
    </ReactBricks>
  )
}

export default MyApp
