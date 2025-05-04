import { ListProvider } from './contexts/list'

import { Main } from './components/Main'
import Header from './components/Header'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <main>
      <ListProvider>
        <Header/>
        <Main />
      </ListProvider>

      <ToastContainer 
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </main>

  )
}

export default App
