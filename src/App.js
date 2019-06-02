import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Login from './views/login/login'
import Register from './views/register/register'
import Home from './views/home/home';
import Detail from './views/detail/detail';
import Buy from './views/buy/buy';
import Bought from './views/bought/bought';
import Button from '@material-ui/core/Button';

function App() {

  const [logout, setLogout] = useState(false)

  function performLogout() {
    setLogout(true)
    window.localStorage.removeItem('email')
    window.location.pathname = 'login'
  }

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" render={(props) =>
              <Login  setLogout={setLogout} {...props}/>
            } />
            <Route path='/login' render={props => <Login setLogout={setLogout} {...props} />} />
            <Route path='/home' render={props => <Home {...props} />} />
            <Route path='/register' render={props => <Register {...props} />} />
            <Route path='/detail' render={props => <Detail {...props} />} />
            <Route path='/buy' render={props => <Buy {...props} />} />
            <Route path='/bought' render={props => <Bought {...props} />} />
          </Switch>
        </main>
        <footer>
          {(logout === true) && <Button onClick={() => { performLogout() }} fullWidth variant="contained" color="primary">
            Logout
          </Button>}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
