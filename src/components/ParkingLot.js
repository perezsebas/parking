import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

import Parking from './Parking';

const ParkingLot = (props) => {
  return (
    <div>
      <Grid>
        <h2>Sótano 1</h2>
        <Row className='row'>
          <Col sm={2}>
            <Parking number={props.parkingLots[0].parkingNumber} />
          </Col>
          <Col sm={2}>
            <Parking number={props.parkingLots[1].parkingNumber} />
          </Col>
          <Col sm={2}>
            <Parking number={props.parkingLots[2].parkingNumber} />
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}>
            <Parking number={props.parkingLots[3].parkingNumber} />
          </Col>
          <Col sm={2}>
            <Parking number={props.parkingLots[4].parkingNumber} />
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <Parking number={props.parkingLots[5].parkingNumber} />
          </Col>
          <Col sm={2}>
            <Parking number={props.parkingLots[6].parkingNumber} />
          </Col>
          <Col sm={2}>
            <Parking number={props.parkingLots[7].parkingNumber} />
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}>
            <Parking number={props.parkingLots[8].parkingNumber} />
          </Col>
          <Col sm={2}>
            <Parking number={props.parkingLots[9].parkingNumber} />
          </Col>
        </Row>
      </Grid>

      <Grid>
        <h2>Sótano 2</h2>
        <Row className='row'>
          <Col sm={2}>
            <Parking number={props.parkingLots[10].parkingNumber} />
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}>
            <Parking number={props.parkingLots[11].parkingNumber} />
          </Col>
          <Col sm={6}></Col>
        </Row>
        <Row>
          <Col sm={2}>
            <Parking number={props.parkingLots[12].parkingNumber} />
          </Col>
          <Col sm={10}></Col>
        </Row>
      </Grid>

      <Grid>
        <h2>Sótano 3</h2>
        <Row className='row'>
          <Col sm={2}>
            <Parking number={props.parkingLots[13].parkingNumber} />
          </Col>
          <Col sm={2}>
            <Parking number={props.parkingLots[14].parkingNumber} />
          </Col>
          <Col sm={8}></Col>
        </Row>
        <Row>
          <Col sm={2}>
            <Parking number={props.parkingLots[15].parkingNumber} />
          </Col>
          <Col sm={2}>
            <Parking number={props.parkingLots[16].parkingNumber} />
          </Col>
          <Col sm={8}></Col>
        </Row>
      </Grid>
    </div>
  );
};

export default ParkingLot;
