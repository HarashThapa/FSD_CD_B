import React from 'react'
import Home from './component/Home'
import Counter from './component/Counter'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/counter' element={<Counter/>} ></Route>
        <Route path='/login' element={<h1>Login</h1>} ></Route>
        <Route path='/logout' element={<h1>Logout</h1>} ></Route>
        <Route path='*' element={<h1>No Page Available</h1>} ></Route>
      </Routes>
  
    </>
  )
}

export default App