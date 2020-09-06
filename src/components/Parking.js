import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Parking = (props) => {
  const [status, setStatus] = useState(props.status);
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
      {props.number}
    </Button>
  );
};

export default Parking;
