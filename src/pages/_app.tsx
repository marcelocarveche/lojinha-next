import React, { useContext } from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { DataContext, DataProvider } from '../store/GlobalState'
import theme from '../styles/theme'
import { useRouter } from 'next/router'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </DataProvider>
    </ThemeProvider>
  )
}

export default MyApp
