import { useState } from 'react';

const useMoodRating = (): {
  moodRating: number;
  setMoodRating: (rating: number) => number | void;
} => {
  const [moodRating, setMoodRating] = useState<number>(3.5);
  return { moodRating, setMoodRating };
};

export default useMoodRating;
