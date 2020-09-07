import './App.css';

import React, { useEffect } from 'react';
import { Grid, Jumbotron, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Hello from './components/Hello';
import ParkingLot from './components/ParkingLot';
import Spinner from './images/Spinner.svg';
import store from './redux/store';

// import { useSelector } from 'react-redux';

// import logo from './logo.svg';
// const backendURL = 'https://parking-back-end.herokuapp.com/api/parking';

const App = () => {
  // let parkingLots = useSelector((state) => state.parkings.parkingLots);
  const parkingLots = store.getState().parkings.parkingLots;
  useEffect(() => {
    getParkingLots();
  });

  const getParkingLots = () => {
    console.log('got them');
  };

  if (parkingLots.length > 0) {
    return (
      <Router>
        <div>
          <Navbar inverse fixedTop>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a>Admin Parqueo</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Link>
                  <Link to='/home'>Home</Link>
                </Navbar.Link>
              </Navbar.Header>
            </Grid>
          </Navbar>
          <Jumbotron>
            <Grid>
              <h2>Listado de parqueaderos</h2>
            </Grid>
          </Jumbotron>

          <Switch>
            <Route path='/home'>
              <Hello />
            </Route>
            <Route path='/'>
              <ParkingLot parkingLots={parkingLots} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <div className='App'>
        <img src={Spinner} alt='logo' />
      </div>
    );
  }
};

export default App;
