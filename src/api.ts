import axios from 'axios';

import { TCheckInHistory, ICheckIn } from '.../../../types';

export const getCheckInHistory = async (): Promise<TCheckInHistory> => {
  const { data } = await axios(`http://localhost:3000/api/checkin`);
  return data;
};

export const logCheckInHistory = async (): Promise<void> => {
  const body = {
    moodRating: 5,
    feelingDescriptions: ['bored'],
    time: Date.now(),
    comment: 'Fine, I guess',
  };
  try {
    await axios.post(`http://localhost:3000/api/checkin`, body);
  } catch (e) {}
  return;
};
