import 'rc-slider/assets/index.css';
import React from 'react';
import Slider from 'rc-slider';

type Props = {
  moodRating: number;
  setMoodRating: (moodRating: number) => number | void;
};

const CurrentMoodSlider: React.FC<Props> = ({ moodRating, setMoodRating }) => {
  const wrapperStyle = { width: 400, margin: 50 };

  return (
    <div style={wrapperStyle}>
      <p>
        <b>Step 1:</b> How would you rate your current mood?
      </p>

      <Slider
        min={0}
        max={7}
        step={0.5}
        defaultValue={3.5}
        value={moodRating}
        trackStyle={{ backgroundColor: '#17a2b8' }}
        handleStyle={{ backgroundColor: '#17a2b8' }}
        onChange={(value: number): number | void => setMoodRating(value)}
      />

      <p>Mood rating: {moodRating}</p>
    </div>
  );
};

export default CurrentMoodSlider;
