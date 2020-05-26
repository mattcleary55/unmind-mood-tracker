import 'rc-slider/assets/index.css';
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import Slider from 'rc-slider';
import { withRouter } from 'react-router-dom';

import { logCheckInHistory } from '../api';

type TFeelingDescriptions = {
  depressed: boolean;
  optimistic: boolean;
  bored: boolean;
  happy: boolean;
};

const CheckInPage: React.FC = (props: any) => {
  const [commentText, setCommentText] = useState<string>('');
  const [moodRating, setMoodRating] = useState<number>(3);
  const [feelingDescriptions, setFeelingDescriptions] = useState<
    TFeelingDescriptions
  >({ depressed: false, optimistic: false, bored: false, happy: false });

  console.log(commentText);
  console.log(moodRating);

  const wrapperStyle = { width: 400, margin: 50 };

  return (
    <div>
      <div style={wrapperStyle}>
        <h2>How are you feeling?</h2>
      </div>

      <div style={wrapperStyle}>
        <p>
          <b>Step 1:</b> How would you rate your current mood?
        </p>
        <Slider
          min={1}
          max={7}
          defaultValue={3}
          value={moodRating}
          onChange={(value: number): void => setMoodRating(value)}
        />
        <p>Mood rating: {moodRating}</p>
      </div>

      <div style={wrapperStyle}>
        <p>
          <b>Step 2:</b> Which of the following describe your current mood?
        </p>

        <button>Depressed</button>

        <button>Optimistic</button>

        <button>Bored</button>

        <button>Happy</button>
      </div>

      <div style={wrapperStyle}>
        <p>
          <b>Step 3:</b> Any other comments?
        </p>

        <TextField
          id='outlined-basic'
          value={commentText}
          onChange={(event): void => setCommentText(event.target.value)}
        />
      </div>

      <div style={wrapperStyle}>
        <Button
          variant='outlined'
          onClick={async () => {
            await logCheckInHistory();
            props.history.push('/checkin-history');
          }}
        >
          Log Check-In
        </Button>
      </div>
    </div>
  );
};

export default withRouter(CheckInPage);
