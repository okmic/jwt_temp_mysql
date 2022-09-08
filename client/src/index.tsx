import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './components/context/authContext'
import { useRoutes } from './components/hooks/routes'
import './index.css'

function App() {


  const [token, setToken] = useState<string | null>(localStorage.getItem("token"))
  const [auth, setAuth] = useState(token ? true : false)
  const [userId, setUserId] = useState<null | number>(null)

 const routes = useRoutes(auth)

  return (
    <AuthContextProvider data={{auth, setAuth, token, setToken, userId, setUserId}}>
    <div className="app">
          {routes}
    </div>
    </AuthContextProvider>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
