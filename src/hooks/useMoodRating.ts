import { useState } from 'react';

const useMoodRating = () => {
  const [moodRating, setMoodRating] = useState<number>(3);
  return { moodRating, setMoodRating };
};

export default useMoodRating;
