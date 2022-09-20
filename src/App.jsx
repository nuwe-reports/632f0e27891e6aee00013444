import { useState } from 'react'

import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import CharactersList from './components/CharactersList'
import CharacterDetail from './components/CharacterDetail'
import Login from './components/Login'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>

    <Routes>
      <Route path='/' element={<CharactersList/>}/>
      <Route path='/:id' element={<CharacterDetail/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </Layout>

  )
}

export default App
