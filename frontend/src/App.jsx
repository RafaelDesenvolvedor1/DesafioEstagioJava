import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { ListProvider } from './contexts/list'

import { Main } from './components/Main'
import Header from './components/Header'




function App() {

  return (
    <main>
      <ListProvider>
        <Header/>
        <Main />
      </ListProvider>
    </main>

  )
}

export default App
