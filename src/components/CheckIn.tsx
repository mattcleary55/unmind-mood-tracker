import React from 'react';
import moment from 'moment';

import { ICheckIn } from '../../types';

const FeelingDescriptor: React.FC<{ text: String }> = ({
  text,
}: {
  text: String;
}) => (
  <div
    style={{
      display: 'inline-block',
      margin: '0 5px',
      borderColor: '#17a2b8',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: '0.25rem',
      padding: '0.375rem 0.75rem',
      maxWidth: 100,
      textAlign: 'center',
      verticalAlign: 'middle',
    }}
  >
    <p
      style={{
        color: '#17a2b8',
        margin: 0,
      }}
    >
      {text}
    </p>
  </div>
);

const CheckIn: React.FC<{ checkIn: ICheckIn }> = ({
  checkIn,
}: {
  checkIn: ICheckIn;
}) => {
  const { moodRating, time, comment, feelingDescriptions } = checkIn;
  return (
    <div>
      <p>
        <b>Mood rating:</b> {moodRating}/10
      </p>

      <div>
        <b>Feelings: </b>
        <div style={{ margin: '10px 0px 20px 0px' }}>
          {feelingDescriptions.map((description: string, index: number) => (
            <FeelingDescriptor text={description} key={index} />
          ))}
        </div>
      </div>

      <p>
        <b>Comments: </b>
        {comment}
      </p>
    </div>
  );
};

export default CheckIn;
