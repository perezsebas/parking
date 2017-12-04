import React, { Component } from 'react';
// import logo from './logo.svg';
import Spinner from './images/Spinner.svg';
import './App.css';
import Parking from './components/Parking';
import { Navbar, Jumbotron, Grid, Row, Col } from 'react-bootstrap';

const backendURL = 'https://parking-back-end.herokuapp.com/api/parking';

class App extends Component {

  constructor(props) {
    super(props);
    this.changeStateParkingLot = this.changeStateParkingLot.bind(this);
    this.parkingNumbers = {
      parking_14: 0,
      parking_15: 1,
      parking_16: 2,
      parking_19: 3,
      parking_20: 4,
      parking_29: 5,
      parking_30: 6,
      parking_33: 7,
      parking_34: 8,
      parking_35: 9,
      parking_85: 10,
      parking_89: 11,
      parking_130: 12,
      parking_257: 13,
      parking_258: 14,
      parking_259: 15,
      parking_260: 16
    };
    this.state = {
      parkingLots: []
    };
  }

  componentWillMount() {
    this.getParkingLots();
  }

  getParkingLots() {

    fetch(backendURL)
      .then((result) => {
        return result.json();
      }).then((parkingLots) => {
        this.setState({ parkingLots });
        console.log(this.state.parkingLots);
      });
  }

  changeStateParkingLot(index, id, status) {

    let newStatus;

    if (status === "AVAILABLE") {
      newStatus = "NOT_AVAILABLE";
    } else {
      newStatus = "AVAILABLE";
    }

    console.log(this.state.parkingLots);

    let parking = this.state.parkingLots;
    parking[index].parkingStatus = newStatus;
    this.setState({ parkingLots: parking });

    fetch(backendURL, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        status: newStatus,
      })
    }).then((result) => {
      return result.json();
    })
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
                  <a href="/">Admin Parqueo</a>
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
            <Row className="row">
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_14].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_14]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_14].parkingStatus}
                  index={this.parkingNumbers.parking_14}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_15].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_15]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_15].parkingStatus}
                  index={this.parkingNumbers.parking_15}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_16].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_16]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_16].parkingStatus}
                  index={this.parkingNumbers.parking_16}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>
              </Col >
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_19].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_19]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_19].parkingStatus}
                  index={this.parkingNumbers.parking_19}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_20].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_20]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_20].parkingStatus}
                  index={this.parkingNumbers.parking_20}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
            </Row>
            <Row>
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_29].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_29]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_29].parkingStatus}
                  index={this.parkingNumbers.parking_29}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_30].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_30]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_30].parkingStatus}
                  index={this.parkingNumbers.parking_30}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_33].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_33]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_33].parkingStatus}
                  index={this.parkingNumbers.parking_33}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>
              </Col >
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_34].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_34]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_34].parkingStatus}
                  index={this.parkingNumbers.parking_34}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_35].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_35]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_35].parkingStatus}
                  index={this.parkingNumbers.parking_35}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
            </Row>
          </Grid>

          <Grid>
            <h1>Sótano 2</h1>
            <Row className="row">
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_85].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_85]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_85].parkingStatus}
                  index={this.parkingNumbers.parking_85}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>
              </Col >
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_89].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_89]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_89].parkingStatus}
                  index={this.parkingNumbers.parking_89}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={6} md={6} lg={6}>
              </Col >
            </Row>
            <Row>
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_130].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_130]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_130].parkingStatus}
                  index={this.parkingNumbers.parking_130}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={10} md={10} lg={10}>
              </Col >
            </Row>
          </Grid>

          <Grid>
            <h1>Sótano 3</h1>
            <Row className="row">
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_257].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_257]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_257].parkingStatus}
                  index={this.parkingNumbers.parking_257}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_258].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_258]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_258].parkingStatus}
                  index={this.parkingNumbers.parking_258}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={8} md={8} lg={8}>
              </Col >
            </Row>
            <Row>
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_259].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_259]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_259].parkingStatus}
                  index={this.parkingNumbers.parking_259}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

                <Parking
                  parkingNumber={this.state.parkingLots[this.parkingNumbers.parking_260].parkingNumber}
                  id={this.state.parkingLots[this.parkingNumbers.parking_260]._id}
                  parkingStatus={this.state.parkingLots[this.parkingNumbers.parking_260].parkingStatus}
                  index={this.parkingNumbers.parking_260}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={8} md={8} lg={8}>
              </Col >
            </Row>
          </Grid>
        </div >
      );
    } else {
      return (
        <div className="App">
          <img src={Spinner} alt="logo" />
          {/* <img src={Spinner} className="App-logo" alt="logo" /> */}
        </div>
      );
    }
  }
}

export default App;
