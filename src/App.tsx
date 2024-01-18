import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopBar from './Components/TopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import ArticlePage from './Components/ArticlePage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <TopBar />
     <Routes>
    <Route path='/' element={<Main />}/>
    <Route path='/article/:id' element={<ArticlePage />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
