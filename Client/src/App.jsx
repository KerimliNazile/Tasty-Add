import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './Layout/Main'
import Home from './Pages/HomePage'
import Addpage from './Pages/Addpage'
import Basket from './Pages/Basket'
import Detail from './Pages/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/add' element={<Addpage />}></Route>
          <Route path='/basket' element={<Basket />}></Route>
          <Route path='/:id' element={<Detail />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
