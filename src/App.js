import './App.css';

import React, { useEffect } from 'react';
import { Col, Grid, Jumbotron, Navbar, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Parking from './components/Parking';
import Spinner from './images/Spinner.svg';

// import logo from './logo.svg';
// const backendURL = 'https://parking-back-end.herokuapp.com/api/parking';

const App = () => {
  // let parkingLots = PARKING_LOTS;
  let parkingLots = useSelector((state) => state.parkings.parkingLots);
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
              <Parking
                status={parkingLots[0].parkingStatus}
                number={parkingLots[0].parkingNumber}
              />
            </Col>
            <Col sm={2}>
              <Parking
                status={parkingLots[1].parkingStatus}
                number={parkingLots[1].parkingNumber}
              />
            </Col>
            <Col sm={2}>
              <Parking
                status={parkingLots[2].parkingStatus}
                number={parkingLots[2].parkingNumber}
              />
            </Col>
            <Col sm={2}></Col>
            <Col sm={2}>
              <Parking
                status={parkingLots[3].parkingStatus}
                number={parkingLots[3].parkingNumber}
              />
            </Col>
            <Col sm={2}>
              <Parking
                status={parkingLots[4].parkingStatus}
                number={parkingLots[4].parkingNumber}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Parking
                status={parkingLots[5].parkingStatus}
                number={parkingLots[5].parkingNumber}
              />
            </Col>
            <Col sm={2}>
              <Parking
                status={parkingLots[6].parkingStatus}
                number={parkingLots[6].parkingNumber}
              />
            </Col>
            <Col sm={2}>
              <Parking
                status={parkingLots[7].parkingStatus}
                number={parkingLots[7].parkingNumber}
              />
            </Col>
            <Col sm={2}></Col>
            <Col sm={2}>
              <Parking
                status={parkingLots[8].parkingStatus}
                number={parkingLots[8].parkingNumber}
              />
            </Col>
            <Col sm={2}>
              <Parking
                status={parkingLots[9].parkingStatus}
                number={parkingLots[9].parkingNumber}
              />
            </Col>
          </Row>
        </Grid>

        <Grid>
          <h1>Sótano 2</h1>
          <Row className='row'>
            <Col sm={2}>
              <Parking
                status={parkingLots[10].parkingStatus}
                number={parkingLots[10].parkingNumber}
              />
            </Col>
            <Col sm={2}></Col>
            <Col sm={2}>
              <Parking
                status={parkingLots[11].parkingStatus}
                number={parkingLots[11].parkingNumber}
              />
            </Col>
            <Col sm={6}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Parking
                status={parkingLots[12].parkingStatus}
                number={parkingLots[12].parkingNumber}
              />
            </Col>
            <Col sm={10}></Col>
          </Row>
        </Grid>

        <Grid>
          <h1>Sótano 3</h1>
          <Row className='row'>
            <Col sm={2}>
              <Parking
                status={parkingLots[13].parkingStatus}
                number={parkingLots[13].parkingNumber}
              />
            </Col>
            <Col sm={2}>
              <Parking
                status={parkingLots[14].parkingStatus}
                number={parkingLots[14].parkingNumber}
              />
            </Col>
            <Col sm={8}></Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Parking
                status={parkingLots[15].parkingStatus}
                number={parkingLots[15].parkingNumber}
              />
            </Col>
            <Col sm={2}>
              <Parking
                status={parkingLots[16].parkingStatus}
                number={parkingLots[16].parkingNumber}
              />
            </Col>
            <Col sm={8}></Col>
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
