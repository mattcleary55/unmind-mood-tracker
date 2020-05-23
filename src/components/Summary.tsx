import React from 'react';

import { TCheckInHistory, ICheckIn } from '.../../../types';

const Summary: React.FC<{ insights: TCheckInHistory }> = ({
  insights,
}: {
  insights: TCheckInHistory;
}) => {
  const averageMoodRating =
    insights.reduce((a: number, b: ICheckIn) => a + b.moodRating, 0) /
    insights.length;

  return (
    <div>
      <h1>Total checkins: {insights.length}</h1>
      <h1>Average mood rating: {averageMoodRating.toFixed(1)}/10</h1>
    </div>
  );
};

export default Summary;
