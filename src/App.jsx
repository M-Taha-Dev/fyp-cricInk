import React from 'react'
import SideBar from './components/Sidebar'

import  {BrowserRouter}  from 'react-router-dom';
import  {Routes}  from 'react-router-dom';
import  {Route}  from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Articles from './pages/Articles';
import Images from './pages/Images';
import Settings from './pages/Settings'
import User from './pages/User';
import { ReactDOM } from 'react';
import Test from './components/Test';
const App = () => {
  return (
    <BrowserRouter>
    <div className='flex'>
    <div className='w-1/6 h-screen'>
          <SideBar/>
    </div>

    <div className='w-5/6 h-screen  '>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/article' element={<Articles/>}/>
            <Route path='/image' element={<Images/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/user' element={<Test/>}/>
        </Routes>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App