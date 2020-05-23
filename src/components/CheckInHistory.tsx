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

const CheckInHistory: React.FC<{ insights: TCheckInHistory }> = ({
  insights,
}: {
  insights: TCheckInHistory;
}) => (
  <Accordion allowZeroExpanded>
    {insights.map((insight: ICheckIn) => (
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            {moment(insight.time).format('DD/MM/YY')}
          </AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
          <CheckIn insight={insight} />
        </AccordionItemPanel>
      </AccordionItem>
    ))}
  </Accordion>
);

export default CheckInHistory;
