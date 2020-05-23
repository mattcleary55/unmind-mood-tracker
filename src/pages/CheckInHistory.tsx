import React from 'react';

import { useGetCheckInHistory } from '../hooks';
import { Summary, CheckInHistory, Spinner } from '../components';

const CheckInHistoryPage: React.FC = () => {
  const { checkInHistory, loading } = useGetCheckInHistory();

  return !loading ? (
    <div>
      <Summary checkInHistory={checkInHistory} />

      <CheckInHistory checkInHistory={checkInHistory} />
    </div>
  ) : (
    <Spinner />
  );
};

export default CheckInHistoryPage;
