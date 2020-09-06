import './App.css';

import React, { useEffect } from 'react';
import { Col, Grid, Jumbotron, Navbar, Row } from 'react-bootstrap';

import Parking from './components/Parking';
import PARKING_LOTS from './data/parkingLots';
import Spinner from './images/Spinner.svg';

// import logo from './logo.svg';
// const backendURL = 'https://parking-back-end.herokuapp.com/api/parking';

const App = () => {
  let parkingLots = PARKING_LOTS;
  useEffect(() => {
    getParkingLots();
  });

  const getParkingLots = () => {
    console.log('got them');
  };

  if (parkingLots.length > 0) {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a>Admin Parqueo</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h2>Listado de parqueaderos</h2>
          </Grid>
        </Jumbotron>

        <Grid>
          <h1>Sótano 1</h1>
          <Row className='row'>
            <Col sm={2}>
              <Parking id={0} />
            </Col>
            <Col sm={2}>
              <Parking id={1} />
            </Col>
            <Col sm={2}>
              <Parking id={2} />
            </Col>
            <Col sm={2}></Col>
            <Col sm={2}>
              <Parking id={3} />
            </Col>
            <Col sm={2}>
              <Parking id={4} />
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Parking id={5} />
            </Col>
            <Col sm={2}>
              <Parking id={6} />
            </Col>
            <Col sm={2}>
              <Parking id={7} />
            </Col>
            <Col sm={2}></Col>
            <Col sm={2}>
              <Parking id={8} />
            </Col>
            <Col sm={2}>
              <Parking id={9} />
            </Col>
          </Row>
        </Grid>

        <Grid>
          <h1>Sótano 2</h1>
          <Row className='row'>
            <Col sm={2}>
              <Parking id={10} />
            </Col>
            <Col sm={2}></Col>
            <Col sm={2}>
              <Parking id={11} />
            </Col>
            <Col sm={6} md={6} lg={6}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Parking id={12} />
            </Col>
            <Col sm={10} md={10} lg={10}></Col>
          </Row>
        </Grid>

        <Grid>
          <h1>Sótano 3</h1>
          <Row className='row'>
            <Col sm={2}>
              <Parking id={13} />
            </Col>
            <Col sm={2}>
              <Parking id={14} />
            </Col>
            <Col sm={8} md={8} lg={8}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Parking id={15} />
            </Col>
            <Col sm={2}>
              <Parking id={16} />
            </Col>
            <Col sm={8} md={8} lg={8}></Col>
          </Row>
        </Grid>
      </div>
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
