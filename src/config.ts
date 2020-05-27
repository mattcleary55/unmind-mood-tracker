import { Feeling } from '../types';

export const primaryColor = '#17a2b8';

export const feelingsList: Feeling[] = [
  'Depressed',
  'Optimistic',
  'Bored',
  'Happy',
  'Hopeful',
  'Frustrated',
  'Lonely',
  'Excited',
];

export const initialFeelingsState = {
  Depressed: false,
  Optimistic: false,
  Bored: false,
  Happy: false,
  Hopeful: false,
  Frustrated: false,
  Lonely: false,
  Excited: false,
};
