import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes, Link} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ul>
        <li>
          <Link to='/'>首页</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/about'>关于</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


