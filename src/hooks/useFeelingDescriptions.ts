import { useState } from 'react';

import { TFeelingDescriptions } from '../types';

const useFeelingDescriptions = (): {
  feelingDescriptions: TFeelingDescriptions;
  setFeelingDescriptions: (
    feelingDescriptions: TFeelingDescriptions
  ) => TFeelingDescriptions | void;
} => {
  const [feelingDescriptions, setFeelingDescriptions] = useState<
    TFeelingDescriptions
  >({ Depressed: false, Optimistic: false, Bored: false, Happy: false });
  return { feelingDescriptions, setFeelingDescriptions };
};

export default useFeelingDescriptions;
