import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Route } from 'wouter'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Config } from './pages/Config'

function App () {
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/config' component={Config} />
    </>
  )
}

export default App
