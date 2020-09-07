import './App.css';

import React, { useEffect } from 'react';
import { Grid, Jumbotron, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Spinner from '../../images/Spinner.svg';
import store from '../../redux/store';
import Hello from '../Hello';
import ParkingLot from '../ParkingLot';

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
                  <Link to='/'>
                    <a>Admin Parqueo</a>
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Link>
                  <Link to='/hello'>Home</Link>
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
            <Route path='/hello'>
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
