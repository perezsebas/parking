import { CHANGE_PARKING_STATUS } from './actionTypes';

export const changeParkingStatus = (number, status) => ({
  type: CHANGE_PARKING_STATUS,
  number,
  status
});
