import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Container } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { ChatBot } from './pages/ChatBot'

import { Create } from './components/Create'
import { Templates } from './components/Templates'
import { ChatBotBanner } from './components/ChatBotBanner'

function App () {
  return (
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
    </Container>
  )
}

export default App
