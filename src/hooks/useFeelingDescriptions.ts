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
  >({ depressed: false, optimistic: false, bored: false, happy: false });
  return { feelingDescriptions, setFeelingDescriptions };
};

export default useFeelingDescriptions;
