import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Navbar, Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';

const backendURL = 'https://parking-back-end.herokuapp.com/api/parking';

class ParkingGrid extends Component {
  render() {
    return (
      <Grid>
        <h1>Sótano 1</h1>
        <Row className="row">
          <Col sm={2} md={2} lg={2}>
            <Button
              // bsStyle = { (this.state.parkingLots[0].parkingStatus === "AVAILABLE") ? "success" : "danger"}
              bsStyle="success"
              bsSize="large"
              block
              onClick={() => this.changeStateParkingLot(0, this.state.parkingLots[0]._id, this.state.parkingLots[0].parkingStatus)}
            >14
      </Button>
          </Col >
          <Col sm={2} md={2} lg={2}>
            <Button bsStyle="success" bsSize="large" block>15</Button>
          </Col >
          <Col sm={2} md={2} lg={2}>
            <Button bsStyle="success" bsSize="large" block>16</Button>
          </Col >
          <Col sm={2} md={2} lg={2}>
          </Col >
          <Col sm={2} md={2} lg={2}>
            <Button bsStyle="success" bsSize="large" block>19</Button>
          </Col >
          <Col sm={2} md={2} lg={2}>
            <Button bsStyle="success" bsSize="large" block>20</Button>
          </Col >
        </Row>
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Button bsStyle="success" bsSize="large" block>35</Button>
          </Col >
          <Col sm={2} md={2} lg={2}>
            <Button bsStyle="success" bsSize="large" block>34</Button>
          </Col >
          <Col sm={2} md={2} lg={2}>
            <Button bsStyle="success" bsSize="large" block>33</Button>
          </Col >
          <Col sm={2} md={2} lg={2}>
          </Col >
          <Col sm={2} md={2} lg={2}>
            <Button bsStyle="success" bsSize="large" block>30</Button>
          </Col >
          <Col sm={2} md={2} lg={2}>
            <Button bsStyle="success" bsSize="large" block>29</Button>
          </Col >
        </Row>
      </Grid>
    );
  }
}

class App extends Component {

  state = {
    parkingLots: []
  }

  componentDidMount() {
    this.getParkingLots();
  }

  getParkingLots() {

    fetch(backendURL)
      .then((result) => {
        return result.json();
      }).then((parkingLots) => {
        this.setState({ parkingLots });
        console.log(parkingLots);
      });
  }

  changeStateParkingLot(index, id, status) {

    let newStatus;

    if (status === "AVAILABLE") {
      newStatus = "NOT_AVAILABLE";
    } else {
      newStatus = "AVAILABLE";
    }

    let parking = this.state.parkingLots;
    parking[index].parkingStatus = newStatus;
    this.setState({ parking });

    console.log(parking);

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
    })
      .then((result) => {
        return result.json();
      })
      .then((jsonResult) => {
        console.log(jsonResult);
      });
  }

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              {/* <Navbar.Brand>
                <a href="/">Parking Admin</a>
              </Navbar.Brand> */}
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h2>Listado de parqueaderos</h2>
          </Grid>
        </Jumbotron>
        <ParkingGrid />
        {/* <Grid>
          <h1>Sótano 1</h1>
          <Row className="row">
            <Col sm={2} md={2} lg={2}>
              <Button
                // bsStyle = { (this.state.parkingLots[0].parkingStatus === "AVAILABLE") ? "success" : "danger"}
                bsStyle="success"
                bsSize="large"
                block
                onClick={() => this.changeStateParkingLot(0, this.state.parkingLots[0]._id, this.state.parkingLots[0].parkingStatus)}
              >14
              </Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>15</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>16</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>19</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>20</Button>
            </Col >
          </Row>
          <Row>
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>35</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>34</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>33</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>30</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>29</Button>
            </Col >
          </Row>
        </Grid> */}
        <Grid>
          <h1>Sótano 2</h1>
          <Row className="row">
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>89</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>85</Button>
            </Col >
            <Col sm={6} md={6} lg={6}>
            </Col >
          </Row>
          <Row>
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>130</Button>
            </Col >
            <Col sm={10} md={10} lg={10}>
            </Col >
          </Row>
        </Grid>
        <Grid>
          <h1>Sótano 3</h1>
          <Row className="row">
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>259</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>260</Button>
            </Col >
            <Col sm={8} md={8} lg={8}>
            </Col >
          </Row>
          <Row>
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>258</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="success" bsSize="large" block>257</Button>
            </Col >
            <Col sm={8} md={8} lg={8}>
            </Col >
          </Row>
        </Grid>
      </div >
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to parking</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }

}

export default App;
