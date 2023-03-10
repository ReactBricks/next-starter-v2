import React, { ReactNode, useContext, useState } from "react"
import { ReactBricksContext } from "react-bricks"

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkColorMode } = useContext(ReactBricksContext)
  return (
    <div
      className={`${
        isDarkColorMode ? "dark" : "light"
      } flex flex-col h-screen justify-between font-content antialiased`}
    >
      <main className='mb-auto'>{children}</main>
    </div>
  )
}

export default Layout
