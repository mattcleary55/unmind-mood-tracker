import React from 'react';
import { Button } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { logCheckInHistory } from '../api';

import { TFeelingDescriptions } from '../types';
import { ICheckIn } from '../../types';

type Props = {
  moodRating: number;
  commentText: string;
  feelingDescriptions: TFeelingDescriptions;
};

const SubmitCheckInButton: React.FC<RouteComponentProps & Props> = (props) => {
  const wrapperStyle = { width: 400, margin: 50 };
  const { moodRating, commentText, feelingDescriptions, history } = props;
  return (
    <div style={wrapperStyle}>
      <Button
        variant='outlined'
        onClick={async (): Promise<void> => {
          await logCheckInHistory(
            formatCheckInData(moodRating, commentText, feelingDescriptions)
          );
          history.push('/checkin-history');
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

  console.log('commentText is: ', comment);
  return {
    moodRating,
    time: Date.now(),
    comment,
    feelingDescriptions,
  };
};

export default withRouter(SubmitCheckInButton);
