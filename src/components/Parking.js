import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import PARKING_LOTS from '../data/parkingLots';

const Parking = (props) => {
  const [status, setStatus] = useState(PARKING_LOTS[props.id].parkingStatus);
  const [bgColor, setBgColor] = useState('success');

  const changeParking = (status) => {
    if (status === 'AVAILABLE') {
      setStatus('NOT_AVAILABLE');
      setBgColor('danger');
    } else {
      setStatus('AVAILABLE');
      setBgColor('success');
    }
  };

  return (
    <Button
      bsStyle={bgColor}
      bsSize='large'
      block
      onClick={() => changeParking(status)}
    >
      {PARKING_LOTS[props.id].parkingNumber}
    </Button>
  );
};

export default Parking;
