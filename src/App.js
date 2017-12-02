import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Navbar, Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';

const backendURL = 'https://parking-back-end.herokuapp.com/api/parking';

const ParkingLot = (props) => {

  const changeColor = (status) => {
    return (status === "AVAILABLE") ? "success" : "danger";
  }

  return (
    <Button
      bsStyle={changeColor(props.parkingStatus)}
      bsSize="large"
      block
      onClick={() => props.changeStateParkingLot(props.index, props.id, props.parkingStatus)}
    > {props.parkingNumber}
    </Button >
  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.changeStateParkingLot = this.changeStateParkingLot.bind(this);
    this.state = {
      parkingLots: []
      // parkingLots: [
      //   { parkingNumber: 13434, _id: '5a1eb35b00f9f000149bd17e', parkingStatus: "NOT_AVAILABLE" },
      //   { parkingNumber: 15534, _id: '"5a1eb3aa00f9f000149bd17f"', parkingStatus: "NOT_AVAILABLE" }
      // ]
    };
  }

  componentWillMount() {

    fetch(backendURL)
      .then((result) => {
        return result.json();
      }).then((parkingLots) => {
        this.setState({ parkingLots });
        console.log(this.state.parkingLots);
        console.log('parking0: ' + this.state.parkingLots[0]._id);
      });

    console.log(this.state.parkingLots);
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
    })
      .then((result) => {
        return result.json();
      })
      .then((jsonResult) => {
        console.log(jsonResult);
      });
  }

  render() {
    if (this.state.parkingLots.length > 0) {
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

          <Grid>
            <h1>Sótano 1</h1>
            <Row className="row">
              <Col sm={2} md={2} lg={2}>

                <ParkingLot
                  parkingNumber={this.state.parkingLots[0].parkingNumber}
                  id={this.state.parkingLots[0]._id}
                  parkingStatus={this.state.parkingLots[0].parkingStatus}
                  index={0}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

                <ParkingLot
                  parkingNumber={this.state.parkingLots[1].parkingNumber}
                  id={this.state.parkingLots[1]._id}
                  parkingStatus={this.state.parkingLots[1].parkingStatus}
                  index={1}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[2].parkingNumber}
                  id={this.state.parkingLots[2]._id}
                  parkingStatus={this.state.parkingLots[2].parkingStatus}
                  index={2}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>
              </Col >
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[3].parkingNumber}
                  id={this.state.parkingLots[3]._id}
                  parkingStatus={this.state.parkingLots[3].parkingStatus}
                  index={3}
                  changeStateParkingLot={this.changeStateParkingLot}
                />
                
              </Col >
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[4].parkingNumber}
                  id={this.state.parkingLots[4]._id}
                  parkingStatus={this.state.parkingLots[4].parkingStatus}
                  index={4}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
            </Row>
            <Row>
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[5].parkingNumber}
                  id={this.state.parkingLots[5]._id}
                  parkingStatus={this.state.parkingLots[5].parkingStatus}
                  index={5}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[6].parkingNumber}
                  id={this.state.parkingLots[6]._id}
                  parkingStatus={this.state.parkingLots[6].parkingStatus}
                  index={6}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[7].parkingNumber}
                  id={this.state.parkingLots[7]._id}
                  parkingStatus={this.state.parkingLots[7].parkingStatus}
                  index={7}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>
              </Col >
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[8].parkingNumber}
                  id={this.state.parkingLots[8]._id}
                  parkingStatus={this.state.parkingLots[8].parkingStatus}
                  index={8}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[9].parkingNumber}
                  id={this.state.parkingLots[9]._id}
                  parkingStatus={this.state.parkingLots[9].parkingStatus}
                  index={9}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
            </Row>
          </Grid>



          <Grid>
            <h1>Sótano 2</h1>
            <Row className="row">
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[10].parkingNumber}
                  id={this.state.parkingLots[10]._id}
                  parkingStatus={this.state.parkingLots[10].parkingStatus}
                  index={10}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>
              </Col >
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[11].parkingNumber}
                  id={this.state.parkingLots[11]._id}
                  parkingStatus={this.state.parkingLots[11].parkingStatus}
                  index={11}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={6} md={6} lg={6}>
              </Col >
            </Row>
            <Row>
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[12].parkingNumber}
                  id={this.state.parkingLots[12]._id}
                  parkingStatus={this.state.parkingLots[12].parkingStatus}
                  index={12}
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

              <ParkingLot
                  parkingNumber={this.state.parkingLots[13].parkingNumber}
                  id={this.state.parkingLots[13]._id}
                  parkingStatus={this.state.parkingLots[13].parkingStatus}
                  index={13}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[14].parkingNumber}
                  id={this.state.parkingLots[14]._id}
                  parkingStatus={this.state.parkingLots[14].parkingStatus}
                  index={14}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={8} md={8} lg={8}>
              </Col >
            </Row>
            <Row>
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[15].parkingNumber}
                  id={this.state.parkingLots[15]._id}
                  parkingStatus={this.state.parkingLots[15].parkingStatus}
                  index={15}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

              </Col >
              <Col sm={2} md={2} lg={2}>

              <ParkingLot
                  parkingNumber={this.state.parkingLots[16].parkingNumber}
                  id={this.state.parkingLots[16]._id}
                  parkingStatus={this.state.parkingLots[16].parkingStatus}
                  index={16}
                  changeStateParkingLot={this.changeStateParkingLot}
                />

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
    } else {
      return (
        <div>Hola</div>
      );
    }
  }
}

export default App;
