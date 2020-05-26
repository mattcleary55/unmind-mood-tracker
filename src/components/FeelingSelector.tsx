import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import { TFeelingDescriptions } from '../types';

type Props = {
  feelingDescriptions: TFeelingDescriptions;
  setFeelingDescriptions: (
    feelingDescriptions: TFeelingDescriptions
  ) => TFeelingDescriptions | void;
};

type Feeling = 'Depressed' | 'Happy' | 'Optimistic' | 'Bored';
const feelings: Feeling[] = ['Depressed', 'Optimistic', 'Bored', 'Happy'];

const FeelingSelector: React.FC<Props> = (props) => {
  const wrapperStyle = { width: 400, margin: 50 };
  const { feelingDescriptions, setFeelingDescriptions } = props;

  const toggleSelection = (value: Feeling): void => {
    const updatedFeelings = Object.assign({}, feelingDescriptions);
    updatedFeelings[value] = !updatedFeelings[value];
    setFeelingDescriptions(updatedFeelings);
  };

  return (
    <div style={wrapperStyle}>
      <p>
        <b>Step 2:</b> Which of the following describe your current mood?
      </p>

      <ButtonGroup>
        {feelings.map((feeling: Feeling, index: number) => (
          <div style={{ margin: 5 }}>
            <Button
              key={index}
              value={feeling}
              variant={feelingDescriptions[feeling] ? 'primary' : 'secondary'}
              onClick={() => toggleSelection(feeling)}
            >
              {feeling}
            </Button>
          </div>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default FeelingSelector;
