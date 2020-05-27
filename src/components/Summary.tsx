import React from 'react';

import { primaryColor } from '../config';

import { TCheckInHistory, ICheckIn } from '../../types';

const Summary: React.FC<{ checkInHistory: TCheckInHistory }> = ({
  checkInHistory,
}: {
  checkInHistory: TCheckInHistory;
}) => {
  const averageMoodRating =
    checkInHistory.reduce((a: number, b: ICheckIn) => a + b.moodRating, 0) /
    checkInHistory.length;

  return (
    <div style={{ marginBottom: 50 }}>
      <h2>Average mood rating: {averageMoodRating.toFixed(1)}/10</h2>

      <h3 style={{ color: primaryColor }}>
        Based on {checkInHistory.length} total check-ins
      </h3>
    </div>
  );
};

export default Summary;
