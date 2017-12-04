import React from 'react';
import { Button } from 'react-bootstrap';

const Parking = (props) => {

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

export default Parking;
