import React from 'react';

import {
  CurrentMoodSlider,
  FeelingSelector,
  OptionalCommentField,
  SubmitCheckInButton,
} from '../components';
import {
  useMoodRating,
  useCommentText,
  useFeelingDescriptions,
} from '../hooks';

const CheckInPage: React.FC = () => {
  const wrapperStyle = { width: 400, margin: 50 };

  const { moodRating, setMoodRating } = useMoodRating();
  const { commentText, setCommentText } = useCommentText();
  const {
    feelingDescriptions,
    setFeelingDescriptions,
  } = useFeelingDescriptions();

  return (
    <div>
      <div style={wrapperStyle}>
        <h2>
          <b>How are you feeling?</b>
        </h2>
      </div>

      <CurrentMoodSlider
        moodRating={moodRating}
        setMoodRating={setMoodRating}
      />

      <FeelingSelector
        feelingDescriptions={feelingDescriptions}
        setFeelingDescriptions={setFeelingDescriptions}
      />

      <OptionalCommentField
        commentText={commentText}
        setCommentText={setCommentText}
      />

      <SubmitCheckInButton
        moodRating={moodRating}
        commentText={commentText}
        feelingDescriptions={feelingDescriptions}
      />
    </div>
  );
};

export default CheckInPage;
