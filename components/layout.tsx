import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { ReactBricksContext } from 'react-bricks'

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  const { isDarkColorMode } = useContext(ReactBricksContext)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className={`${
        isDarkColorMode ? 'dark' : 'light'
      } flex flex-col h-screen justify-between font-content antialiased`}
    >
      <main className="mb-auto">{children}</main>
    </div>
  )
}

export default Layout
