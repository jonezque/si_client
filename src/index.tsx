import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { client } from './apollo-config'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './theme'
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
import { ApolloProvider } from '@apollo/client'
import { ConfigProvider } from 'antd'
import ru from 'antd/lib/locale/ru_RU'
import 'moment/locale/ru'

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ru}>
      <ApolloProvider client={client}>
        <Router>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </Router>
      </ApolloProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
