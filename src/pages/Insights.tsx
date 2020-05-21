import React from 'react';

import { useGetInsights } from '../hooks';

const Spinner = () => (
  <div className='spinner-border' role='status'>
    <span className='sr-only'>Loading...</span>
  </div>
);

const Insights = () => {
  const { insights, loading } = useGetInsights();

  return loading ? <Spinner /> : <h2>{insights}</h2>;
};

export default Insights;
