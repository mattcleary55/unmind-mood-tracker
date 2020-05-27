import React from 'react';
import { Button } from 'react-bootstrap';
import moment from 'moment';
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
        variant='info'
        size='lg'
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
  Object.entries(feelingDescriptionsMap).forEach(
    ([key, value]: [string, boolean]): void => {
      if (value) feelingDescriptions.push(key);
    }
  );

  return {
    moodRating,
    time: moment().valueOf(),
    comment,
    feelingDescriptions,
  };
};

export default withRouter(SubmitCheckInButton);
