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
}) => (
  <Accordion allowZeroExpanded>
    {checkInHistory.map((checkIn: ICheckIn) => (
      <AccordionItem>
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

export default CheckInHistory;
