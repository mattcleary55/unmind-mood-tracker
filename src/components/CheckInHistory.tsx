import React from 'react';
import moment from 'moment';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import CheckIn from './CheckIn';

import { TCheckInHistory, ICheckIn } from '.../../../types';

import 'react-accessible-accordion/dist/fancy-example.css';

const CheckInHistory: React.FC<{ checkInHistory: TCheckInHistory }> = ({
  checkInHistory,
}: {
  checkInHistory: TCheckInHistory;
}) => {
  const latestEntryUUID = '63931684-9f47-11ea-bb37-0242ac130002';
  return (
    <Accordion allowZeroExpanded preExpanded={[latestEntryUUID]}>
      {checkInHistory.map((checkIn: ICheckIn, index: number) => (
        <AccordionItem
          key={index}
          uuid={index === 0 ? latestEntryUUID : undefined}
        >
          <AccordionItemHeading>
            <AccordionItemButton>
              {moment(checkIn.time).format('DD/MM/YY')}
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <CheckIn checkIn={checkIn} />
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CheckInHistory;
