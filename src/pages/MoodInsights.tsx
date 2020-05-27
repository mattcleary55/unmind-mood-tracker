import React from 'react';

import { useGetCheckInHistory } from '../hooks';
import { Summary, CheckInHistory, Spinner } from '../components';

const MoodInsightsPage: React.FC = () => {
  const { checkInHistory, loading } = useGetCheckInHistory();

  const wrapperStyle = { margin: 50 };

  return (
    <div style={wrapperStyle}>
      {!loading ? (
        <>
          <Summary checkInHistory={checkInHistory} />

          <CheckInHistory checkInHistory={checkInHistory} />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MoodInsightsPage;
