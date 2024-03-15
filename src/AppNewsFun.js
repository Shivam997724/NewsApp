import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './NewsFun/NavBar';
import News from "./NewsFun/News";
import { Route ,Routes } from 'react-router-dom';
// import LoadingBar from 'react-top-loading-bar';

export const AppNewsFun = ()=> {
  
    return (
      <div>
        <NavBar/>
        {/* <LoadingBar
        color='#f11946'
        progress={progress}
      /> */}
        <Routes>
      <Route exact path='/'  element={<News key="general" page={10} country="in" category="general"/>}/>
      <Route exact path='/business'element={<News  key="business"  page={10} country="in" category="business"/>}/> 
      <Route exact path='/entertainment' element={<News key="entertainment" page={10} country="in" category="entertainment"/>}/> 
      <Route exact path='/health' element={<News key="health" page={10} country="in" category="health"/>}/> 
      <Route exact path='/science' element={<News key="science" page={10} country="in" category="science"/>}/> 
      <Route exact path='/technology' element={<News key="technology" page={10} country="in" category="technology"/>}/> 
      <Route exact path='/sports'  element={<News key="sports" page={10} country="in" category="sports"/>}/> 
       </Routes>
      </div>
    )
  
}

export default AppNewsFun;


