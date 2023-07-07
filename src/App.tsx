import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Container, CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { ChatBot } from './pages/ChatBot'

import { Create } from './components/Create'
import { Templates } from './components/Templates'
import { ChatBotBanner } from './components/ChatBotBanner'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { useZustandDarkModeStore } from './hooks/useZustandDarkModeStore'
import { DarkModeButton } from './components/DarkModeButton'

function App () {
  const { mode } = useZustandDarkModeStore()
  const darkTheme = createTheme({
    palette: {
      mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth='xl'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />

            <Route path='/chatbot' element={<ChatBot />}>
              <Route path='inicio' element={<ChatBotBanner />} />
              <Route path='crear' element={<Create />} />
              <Route path='plantillas' element={<Templates />} />
            </Route>
          </Routes>
        </BrowserRouter>

        <DarkModeButton />
      </Container>
    </ThemeProvider>
  )
}

export default App
