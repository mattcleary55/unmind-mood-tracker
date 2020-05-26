export interface ICheckIn {
  moodRating: number;
  feelingDescriptions: string[];
  time: number;
  comment: string;
}

export type TCheckInHistory = ReadonlyArray<ICheckIn>;
