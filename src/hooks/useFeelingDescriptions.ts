import { useState } from 'react';

import { initialFeelingsState } from '../config';

import { TFeelingDescriptions } from '../../types';

const useFeelingDescriptions = (): {
  feelingDescriptions: TFeelingDescriptions;
  setFeelingDescriptions: (
    feelingDescriptions: TFeelingDescriptions
  ) => TFeelingDescriptions | void;
} => {
  const [feelingDescriptions, setFeelingDescriptions] = useState<
    TFeelingDescriptions
  >(initialFeelingsState);
  return { feelingDescriptions, setFeelingDescriptions };
};

export default useFeelingDescriptions;
