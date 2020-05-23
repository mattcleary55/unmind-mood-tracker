export interface ICheckIn {
  moodRating: number;
  feelingDescriptions: ReadonlyArray<string>;
  time: Date;
  comment: string;
}

export type TCheckInHistory = ReadonlyArray<ICheckIn>;
