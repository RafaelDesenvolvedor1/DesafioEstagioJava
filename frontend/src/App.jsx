import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ListProvider } from './contexts/list'

import { Main } from './components/Main'


function App() {

  return (
    <main>
      <ListProvider>
        <Main />
      </ListProvider>
    </main>

  )
}

export default App
