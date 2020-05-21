import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [insights, setInsights] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect((): void => {
    (async (): Promise<void> => {
      let { data } = await axios(`http://localhost:3000/insights`);
      setInsights(data);
      setLoading(false);
      // Ideally we'd want to wrap this in a try/catch in case this fails
      // and render appropriate UI for the errors
    })();
  }, []);

  return { insights, loading };
};
