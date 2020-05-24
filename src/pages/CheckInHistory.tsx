import React from 'react';

import { useGetCheckInHistory } from '../hooks';
import { Summary, CheckInHistory, Spinner } from '../components';

const CheckInHistoryPage: React.FC = () => {
  const { checkInHistory, loading } = useGetCheckInHistory();

  const wrapperStyle = { margin: 50 };

  return !loading ? (
    <div style={wrapperStyle}>
      <Summary checkInHistory={checkInHistory} />

      <CheckInHistory checkInHistory={checkInHistory} />
    </div>
  ) : (
    <Spinner />
  );
};

export default CheckInHistoryPage;
