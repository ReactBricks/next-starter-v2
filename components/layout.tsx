import React, { ReactNode, useContext, useState } from 'react'
import { ReactBricksContext } from 'react-bricks/frontend'

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkColorMode } = useContext(ReactBricksContext)
  return (
    <div
      className={`${
        isDarkColorMode ? 'dark' : 'light'
      } flex flex-col h-screen justify-between font-content antialiased text-[62.5%]`}
    >
      <main className="mb-auto">{children}</main>
    </div>
  )
}

export default Layout
