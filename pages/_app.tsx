import React from 'react'
import "./globalStyles.scss"
import { ThemeProvider } from 'next-themes'
import { Montserrat } from "next/font/google"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../api/queryClient'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // какие нужны веса
  variable: "--font-montserrat", // кастомное CSS-переменное имя
})

const _app = ({Component, pageProps}) => {
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="data-theme" defaultTheme='dark'>
        <main className={montserrat.variable}>
        <Component{...pageProps}/>
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default _app