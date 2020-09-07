import './App.css';

import React, { Component } from 'react';
import { Col, Grid, Jumbotron, Navbar, Row } from 'react-bootstrap';

import Parking from './components/Parking';
import PARKING_LOTS from './data/parkingLots';
import Spinner from './images/Spinner.svg';

// import logo from './logo.svg';
const backendURL = 'https://parking-back-end.herokuapp.com/api/parking';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeStateParkingLot = this.changeStateParkingLot.bind(this);
    this.state = {
      parkingLots: PARKING_LOTS
    };
  }

  componentDidMount() {
    // this.getParkingLots();
  }

  getParkingLots() {
    fetch(backendURL)
      .then((result) => {
        return result.json();
      })
      .then((parkingLots) => {
        this.setState({ parkingLots });
        // console.log(this.state.parkingLots);
      });
  }

  changeStateParkingLot(index, id, status) {
    let newStatus;

    if (status === 'AVAILABLE') {
      newStatus = 'NOT_AVAILABLE';
    } else {
      newStatus = 'AVAILABLE';
    }

    let parking = this.state.parkingLots;
    parking[index].parkingStatus = newStatus;
    this.setState({ parkingLots: parking });

    // fetch(backendURL, {
    //   method: 'put',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     id: id,
    //     status: newStatus
    //   })
    // }).then((result) => {
    //   return result.json();
    // });
    // .then((jsonResult) => {
    // console.log(jsonResult);
    // });
  }

  render() {
    if (this.state.parkingLots.length > 0) {
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
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[0].parkingNumber}
                  id={this.state.parkingLots[0]._id}
                  parkingStatus={this.state.parkingLots[0].parkingStatus}
                  index={0}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[1].parkingNumber}
                  id={this.state.parkingLots[1]._id}
                  parkingStatus={this.state.parkingLots[1].parkingStatus}
                  index={1}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[2].parkingNumber}
                  id={this.state.parkingLots[2]._id}
                  parkingStatus={this.state.parkingLots[2].parkingStatus}
                  index={2}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={2} md={2} lg={2}></Col>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[3].parkingNumber}
                  id={this.state.parkingLots[3]._id}
                  parkingStatus={this.state.parkingLots[3].parkingStatus}
                  index={3}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[4].parkingNumber}
                  id={this.state.parkingLots[4]._id}
                  parkingStatus={this.state.parkingLots[4].parkingStatus}
                  index={4}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[5].parkingNumber}
                  id={this.state.parkingLots[5]._id}
                  parkingStatus={this.state.parkingLots[5].parkingStatus}
                  index={5}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[6].parkingNumber}
                  id={this.state.parkingLots[6]._id}
                  parkingStatus={this.state.parkingLots[6].parkingStatus}
                  index={6}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[7].parkingNumber}
                  id={this.state.parkingLots[7]._id}
                  parkingStatus={this.state.parkingLots[7].parkingStatus}
                  index={7}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={2} md={2} lg={2}></Col>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[8].parkingNumber}
                  id={this.state.parkingLots[8]._id}
                  parkingStatus={this.state.parkingLots[8].parkingStatus}
                  index={8}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[9].parkingNumber}
                  id={this.state.parkingLots[9]._id}
                  parkingStatus={this.state.parkingLots[9].parkingStatus}
                  index={9}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
            </Row>
          </Grid>

          <Grid>
            <h1>Sótano 2</h1>
            <Row className='row'>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[10].parkingNumber}
                  id={this.state.parkingLots[10]._id}
                  parkingStatus={this.state.parkingLots[10].parkingStatus}
                  index={10}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={2} md={2} lg={2}></Col>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[11].parkingNumber}
                  id={this.state.parkingLots[11]._id}
                  parkingStatus={this.state.parkingLots[11].parkingStatus}
                  index={11}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={6} md={6} lg={6}></Col>
            </Row>
            <Row>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[12].parkingNumber}
                  id={this.state.parkingLots[12]._id}
                  parkingStatus={this.state.parkingLots[12].parkingStatus}
                  index={12}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={10} md={10} lg={10}></Col>
            </Row>
          </Grid>

          <Grid>
            <h1>Sótano 3</h1>
            <Row className='row'>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[13].parkingNumber}
                  id={this.state.parkingLots[13]._id}
                  parkingStatus={this.state.parkingLots[13].parkingStatus}
                  index={13}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[14].parkingNumber}
                  id={this.state.parkingLots[14]._id}
                  parkingStatus={this.state.parkingLots[14].parkingStatus}
                  index={14}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={8} md={8} lg={8}></Col>
            </Row>
            <Row>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[15].parkingNumber}
                  id={this.state.parkingLots[15]._id}
                  parkingStatus={this.state.parkingLots[15].parkingStatus}
                  index={15}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
              </Col>
              <Col sm={2} md={2} lg={2}>
                <Parking
                  parkingNumber={this.state.parkingLots[16].parkingNumber}
                  id={this.state.parkingLots[16]._id}
                  parkingStatus={this.state.parkingLots[16].parkingStatus}
                  index={16}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
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
          {/* <img src={Spinner} className="App-logo" alt="logo" /> */}
        </div>
      );
    }
  }
}

export default App;
