import React from 'react';
import moment from 'moment';

import { ICheckIn } from '.../../../types';

const FeelingDescriptor: React.FC<{ text: String }> = ({
  text,
}: {
  text: String;
}) => <p>{text}</p>;

const CheckIn: React.FC<{ checkIn: ICheckIn }> = ({
  checkIn,
}: {
  checkIn: ICheckIn;
}) => {
  const { moodRating, time, comment, feelingDescriptions } = checkIn;
  return (
    <div>
      <p>{moodRating}/10</p>

      <p>{moment(time).format('DD/MM/YY')}</p>

      <div>
        {feelingDescriptions.map((description) => (
          <FeelingDescriptor text={description} />
        ))}
      </div>

      <p>{comment}</p>
    </div>
  );
};

export default CheckIn;
