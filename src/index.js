import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './Components/ClassComponent';
import HookComponent from './Components/HookComponent';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <ClassComponent/>
      <HookComponent/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


