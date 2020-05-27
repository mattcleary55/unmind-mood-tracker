import { Request, Response } from 'express';
import { TCheckInHistory, ICheckIn } from '../../types';

const checkinHistory = require('../data');

export {};

const getCheckInHistory = (
  req: Request,
  res: Response
): Response<TCheckInHistory> =>
  res
    .status(200)
    .send(
      checkinHistory.sort((a: ICheckIn, b: ICheckIn): number => b.time - a.time)
    );

module.exports = getCheckInHistory;
