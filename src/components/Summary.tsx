import React from 'react';

import { TCheckInHistory, ICheckIn } from '.../../../types';

const Summary: React.FC<{ checkInHistory: TCheckInHistory }> = ({
  checkInHistory,
}: {
  checkInHistory: TCheckInHistory;
}) => {
  const averageMoodRating =
    checkInHistory.reduce((a: number, b: ICheckIn) => a + b.moodRating, 0) /
    checkInHistory.length;

  return (
    <div>
      <h1>Total checkins: {checkInHistory.length}</h1>
      <h1>Average mood rating: {averageMoodRating.toFixed(1)}/10</h1>
    </div>
  );
};

export default Summary;
