import React from 'react';
import {
  CurrentMoodSlider,
  FeelingSelector,
  OptionalCommentField,
  SubmitCheckInButton,
} from '../components';

const CheckInPage: React.FC = () => {
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
