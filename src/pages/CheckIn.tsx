import React, { useState } from 'react';
import {
  CurrentMoodSlider,
  FeelingSelector,
  OptionalCommentField,
  SubmitCheckInButton,
} from '../components';

type TFeelingDescriptions = {
  depressed: boolean;
  optimistic: boolean;
  bored: boolean;
  happy: boolean;
};

const CheckInPage: React.FC = () => {
  const [feelingDescriptions, setFeelingDescriptions] = useState<
    TFeelingDescriptions
  >({ depressed: false, optimistic: false, bored: false, happy: false });

  const wrapperStyle = { width: 400, margin: 50 };

  return (
    <div>
      <div style={wrapperStyle}>
        <h2>How are you feeling?</h2>
      </div>

      <CurrentMoodSlider />

      <FeelingSelector />

      <OptionalCommentField />

      <SubmitCheckInButton />
    </div>
  );
};

export default CheckInPage;
