export interface ICheckIn {
  moodRating: number;
  feelingDescriptions: ReadonlyArray<
    'depressed' | 'happy' | 'optimistic' | 'bored'
  >;
  time: number;
  comment: string;
}

export type TCheckInHistory = ReadonlyArray<ICheckIn>;
