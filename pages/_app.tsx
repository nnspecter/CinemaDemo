import React from 'react'
import "./globalStyles.scss"
import { ThemeProvider } from 'next-themes'

const _app = ({Component, pageProps}) => {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme='dark'>
      <Component{...pageProps}/>
    </ThemeProvider>
  )
}

export default _app