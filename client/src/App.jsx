import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Newrepo from './pages/Newrepo';
import Createrepo from './pages/Createrepo';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/newrepo" element={<Newrepo/>}/>
      <Route path='/createrepo' element={<Createrepo/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
