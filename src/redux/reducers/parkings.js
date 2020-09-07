import PARKING_LOTS from '../../data/parkingLots';
import { CHANGE_PARKING_STATUS } from '../actionTypes';

const initialState = {
  parkingLots: PARKING_LOTS
};

const parkings = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PARKING_STATUS: {
      const newStatus =
        action.status === 'AVAILABLE' ? 'NOT_AVAILABLE' : 'AVAILABLE';
      const parkingLots = state.parkingLots.map((parking) =>
        parking.parkingNumber === action.number
          ? { ...parking, parkingStatus: newStatus }
          : parking
      );
      return { parkingLots };
    }
    default:
      return state;
  }
};

export default parkings;
