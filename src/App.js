import React from 'react';
import './App.css';
import './index.css';
import {Home} from './screens/home'
import {Header} from "./components/header";

function App() {
  return (
    <div className="App">
      <Header/>
    <div className={'body'}>
      <Home/>
    </div>
    </div>
  );
}

export default App;
