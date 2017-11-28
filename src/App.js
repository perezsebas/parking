import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Navbar, Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
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
            {/* <Button
              bsStyle="success"
              bsSize="large"
              href="http://react-bootstrap.github.io/components.html"
              target="_blank">
              View React Bootstrap Docs
          </Button> */}
          </Grid>
        </Jumbotron>
        <Grid>
          <h1>Sótano 1</h1>
          <Row className="row">
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>14</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>15</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>16</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>15</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>19</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>20</Button>
            </Col >
          </Row>
          <Row>
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>35</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>34</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>33</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>15</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>30</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>29</Button>
            </Col >
          </Row>
        </Grid>
        <Grid>
          <h1>Sótano 2</h1>
          <Row className="row">
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>89</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>15</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>85</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>15</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>19</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>20</Button> */}
            </Col >
          </Row>
          <Row>
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>130</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>34</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>33</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>15</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>30</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>29</Button> */}
            </Col >
          </Row>
        </Grid>
        <Grid>
          <h1>Sótano 3</h1>
          <Row className="row">
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>259</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>260</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>85</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>15</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>19</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>20</Button> */}
            </Col >
          </Row>
          <Row>
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>258</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              <Button bsStyle="primary" bsSize="large" block>257</Button>
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>33</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>15</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>30</Button> */}
            </Col >
            <Col sm={2} md={2} lg={2}>
              {/* <Button bsStyle="primary" bsSize="large" block>29</Button> */}
            </Col >
          </Row>
        </Grid>
      </div>
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
