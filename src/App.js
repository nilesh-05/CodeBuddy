import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/nav/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/header';
import Home from './components/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>

        <Route path='/home'>
          <Navbar />
          <div className='d-flex'>
            {/* <Header /> */}
            <Sidebar />
            <Home />
          </div>
        </Route>

        <Route exact path='/register'>
          <Register />
        </Route>

        {/* <Route exact path="/myprofile">
			<Myprofile/>
</Route> */}
      </Switch>
    </Router>
  );
}

export default App;
