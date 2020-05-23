import React from 'react';

import { useGetInsights } from '../hooks';
import { Summary, CheckInHistory, Spinner } from '../components';

const Insights: React.FC = () => {
  const { insights, loading } = useGetInsights();

  return !loading ? (
    <div>
      <Summary insights={insights} />
      <CheckInHistory insights={insights} />
    </div>
  ) : (
    <Spinner />
  );
};

export default Insights;
