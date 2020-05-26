import React from 'react';

import { useGetCheckInHistory } from '../hooks';
import { Summary, CheckInHistory, Spinner } from '../components';

const CheckInHistoryPage: React.FC = () => {
  const { checkInHistory, loading } = useGetCheckInHistory();

  const wrapperStyle = { margin: 50 };

  return (
    <div style={wrapperStyle}>
      {!loading ? (
        <React.Fragment>
          <Summary checkInHistory={checkInHistory} />

          <CheckInHistory checkInHistory={checkInHistory} />
        </React.Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CheckInHistoryPage;
