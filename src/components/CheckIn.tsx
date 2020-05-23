import React from 'react';
import moment from 'moment';

import { ICheckIn } from '.../../../types';

const FeelingDescriptor: React.FC<{ text: String }> = ({
  text,
}: {
  text: String;
}) => <p>{text}</p>;

const CheckIn: React.FC<{ insight: ICheckIn }> = ({
  insight,
}: {
  insight: ICheckIn;
}) => {
  return (
    <div>
      <p>{insight.moodRating}/10</p>

      <p>{moment(insight.time).format('DD/MM/YY')}</p>

      <div>
        {insight.feelingDescriptions.map((description) => (
          <FeelingDescriptor text={description} />
        ))}
      </div>
    </div>
  );
};

export default CheckIn;
