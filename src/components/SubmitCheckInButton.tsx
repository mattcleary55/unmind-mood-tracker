import React from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { logCheckInHistory } from '../api';
import {
  useMoodRating,
  useCommentText,
  useFeelingDescriptions,
} from '../hooks';

import { TFeelingDescriptions } from '../types';
import { ICheckIn } from '../../types';

const SubmitCheckInButton: React.FC = (props: any) => {
  const wrapperStyle = { width: 400, margin: 50 };

  const { moodRating } = useMoodRating();
  const { commentText } = useCommentText();
  const { feelingDescriptions } = useFeelingDescriptions();

  return (
    <div style={wrapperStyle}>
      <Button
        variant='outlined'
        onClick={async (): Promise<void> => {
          await logCheckInHistory(
            formatCheckInData(moodRating, commentText, feelingDescriptions)
          );
          props.history.push('/checkin-history');
        }}
      >
        Log Check-In
      </Button>
    </div>
  );
};

const formatCheckInData = (
  moodRating: number,
  comment: string,
  feelingDescriptionsMap: TFeelingDescriptions
): ICheckIn => {
  const feelingDescriptions: string[] = [];
  Object.entries(feelingDescriptionsMap).forEach(([key, value]): void => {
    if (value) feelingDescriptions.push(key);
  });

  return {
    moodRating,
    time: Date.now(),
    comment,
    feelingDescriptions,
  };
};

export default withRouter(SubmitCheckInButton);
