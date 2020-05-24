import { useState, useEffect } from 'react';

import { getCheckInHistory } from '../api';

import { TCheckInHistory } from '.../../../types';

export default () => {
  const [checkInHistory, setCheckInHistory] = useState<TCheckInHistory>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect((): void => {
    (async (): Promise<void> => {
      const data = await getCheckInHistory();
      setCheckInHistory(data);
      setLoading(false);
      // Ideally we'd want to wrap this in a try/catch in case this fails
      // and render appropriate UI for the errors
    })();
  }, []);

  return { checkInHistory, loading };
};
