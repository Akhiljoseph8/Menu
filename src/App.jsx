import { useState } from 'react'

import './App.css'
import AddMenu from './pages/AddMenu/AddMenu'
import MenuPage from './pages/MenuPage/MenuPage'
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <> 
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/add-menu" element={<AddMenu />} /> 
        </Routes>
    </>
  )
}

export default App
