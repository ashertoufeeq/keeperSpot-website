import React from 'react';
import './App.css';
import './index.css';
import {Home} from './screens/home'
import {Header} from "./components/header";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
    <div className={'body'}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact render={(routeProps) => (<Home {...routeProps}/>)}/>
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
