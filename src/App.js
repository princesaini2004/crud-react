import React from 'react'
import css from './App.css'
import Create from './Crud/Create'
import Indexpage from './Crud/Indexpage'
import Update from './Crud/Update'
import View from './Crud/Viewdata'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/index' element={<Indexpage></Indexpage>}/>
        <Route exact path='/' element={<Create></Create>}/>
        <Route exact path='/update' element={<Update></Update>}/>
        <Route exact path='/View' element={<View></View>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
