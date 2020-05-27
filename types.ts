export interface ICheckIn {
  moodRating: number;
  feelingDescriptions: string[];
  time: number;
  comment: string;
}

export type TCheckInHistory = ReadonlyArray<ICheckIn>;

export type Feeling =
  | 'Depressed'
  | 'Happy'
  | 'Optimistic'
  | 'Bored'
  | 'Hopeful'
  | 'Frustrated'
  | 'Lonely'
  | 'Excited';

export type TFeelingDescriptions = {
  Depressed: boolean;
  Optimistic: boolean;
  Bored: boolean;
  Happy: boolean;
  Hopeful: boolean;
  Frustrated: boolean;
  Lonely: boolean;
  Excited: boolean;
};
