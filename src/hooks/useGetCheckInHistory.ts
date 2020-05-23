import { useState, useEffect } from 'react';
import axios from 'axios';

import { TCheckInHistory } from '.../../../types';

export default () => {
  const [checkInHistory, setCheckInHistory] = useState<TCheckInHistory>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect((): void => {
    (async (): Promise<void> => {
      let { data } = await axios(`http://localhost:3000/api/checkin`);
      setCheckInHistory(data);
      setLoading(false);
      // Ideally we'd want to wrap this in a try/catch in case this fails
      // and render appropriate UI for the errors
    })();
  }, []);

  return { checkInHistory, loading };
};
