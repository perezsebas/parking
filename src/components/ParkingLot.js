// import '../App.css';
import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

import Parking from './Parking';


const ParkingLot = (props) => {
  return (
    <div>
      <Grid>
        <h1>Sótano 1</h1>
        <Row className='row'>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[0].parkingStatus}
              number={props.parkingLots[0].parkingNumber}
            />
          </Col>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[1].parkingStatus}
              number={props.parkingLots[1].parkingNumber}
            />
          </Col>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[2].parkingStatus}
              number={props.parkingLots[2].parkingNumber}
            />
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[3].parkingStatus}
              number={props.parkingLots[3].parkingNumber}
            />
          </Col>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[4].parkingStatus}
              number={props.parkingLots[4].parkingNumber}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[5].parkingStatus}
              number={props.parkingLots[5].parkingNumber}
            />
          </Col>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[6].parkingStatus}
              number={props.parkingLots[6].parkingNumber}
            />
          </Col>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[7].parkingStatus}
              number={props.parkingLots[7].parkingNumber}
            />
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[8].parkingStatus}
              number={props.parkingLots[8].parkingNumber}
            />
          </Col>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[9].parkingStatus}
              number={props.parkingLots[9].parkingNumber}
            />
          </Col>
        </Row>
      </Grid>

      <Grid>
        <h1>Sótano 2</h1>
        <Row className='row'>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[10].parkingStatus}
              number={props.parkingLots[10].parkingNumber}
            />
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[11].parkingStatus}
              number={props.parkingLots[11].parkingNumber}
            />
          </Col>
          <Col sm={6}></Col>
        </Row>
        <Row>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[12].parkingStatus}
              number={props.parkingLots[12].parkingNumber}
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
              // status={props.parkingLots[13].parkingStatus}
              number={props.parkingLots[13].parkingNumber}
            />
          </Col>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[14].parkingStatus}
              number={props.parkingLots[14].parkingNumber}
            />
          </Col>
          <Col sm={8}></Col>
        </Row>
        <Row>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[15].parkingStatus}
              number={props.parkingLots[15].parkingNumber}
            />
          </Col>
          <Col sm={2}>
            <Parking
              // status={props.parkingLots[16].parkingStatus}
              number={props.parkingLots[16].parkingNumber}
            />
          </Col>
          <Col sm={8}></Col>
        </Row>
      </Grid>
    </div>
  );
};

export default ParkingLot;
