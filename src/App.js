import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch,Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Home from './components/RegisterForm/Home/Home';

function App() {
  return (
    
    <div className='container'>
        <BrowserRouter>
          <Switch>
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/home" component={Home} />
              <Redirect from="/" to ="/login" />
          </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
