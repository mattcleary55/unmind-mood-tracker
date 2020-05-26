import axios from 'axios';

import { TCheckInHistory, ICheckIn } from '../types';

const localServerEndpoint = 'http://localhost:3000/api/checkin';

export const getCheckInHistory = async (): Promise<TCheckInHistory> => {
  const { data } = await axios(localServerEndpoint);
  return data;
};

export const logCheckInHistory = async (
  checkInData: ICheckIn
): Promise<void> => {
  console.log(checkInData);
  try {
    await axios.post(localServerEndpoint, checkInData);
  } catch (e) {}
  return;
};
