import React from 'react';

import { primaryColor } from '../config';
import { ICheckIn } from '../../types';

const FeelingDescriptor: React.FC<{ text: String }> = ({
  text,
}: {
  text: String;
}) => (
  <div style={styles.feelingContainerStyle}>
    <p style={styles.feelingTextStyle}>{text}</p>
  </div>
);

const CheckIn: React.FC<{ checkIn: ICheckIn }> = ({
  checkIn,
}: {
  checkIn: ICheckIn;
}) => {
  const { moodRating, comment, feelingDescriptions } = checkIn;
  return (
    <div>
      <p>
        <b>Mood rating:</b>

        <br />

        <b style={{ color: primaryColor }}>{moodRating}/10</b>
      </p>

      <div>
        <b>Feelings: </b>

        <div style={styles.feelingListStyle}>
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

const styles = {
  feelingListStyle: { margin: '10px 0px 20px 0px' },
  feelingContainerStyle: {
    display: 'inline-block',
    margin: '5px 5px',
    borderColor: primaryColor,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: '0.25rem',
    padding: '0.375rem 0.75rem',
    maxWidth: 100,
    verticalAlign: 'middle',
  },
  feelingTextStyle: {
    color: primaryColor,
    margin: 0,
  },
};
export default CheckIn;
