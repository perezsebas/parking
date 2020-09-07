import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import PARKING_LOTS from '../data/parkingLots';
import { changeParkingStatus } from '../redux/actions';

const Parking = (props) => {
  // const [status, setStatus] = useState(props.status);
  const index = PARKING_LOTS.findIndex(
    (parking) => parking.parkingNumber === props.number
  );
  const status = useSelector(
    (state) => state.parkings.parkingLots[index].parkingStatus
  );
  const dispatch = useDispatch();

  const changeParking = () => {
    // status === 'AVAILABLE'
    //   ? setStatus('NOT_AVAILABLE')
    //   : setStatus('AVAILABLE');
    dispatch(changeParkingStatus(props.number, status));
  };

  return (
    <Button
      bsStyle={status === 'AVAILABLE' ? 'success' : 'danger'}
      bsSize='large'
      block
      onClick={() => changeParking()}
    >
      {props.number}
    </Button>
  );
};

export default Parking;
