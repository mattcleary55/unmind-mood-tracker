import { Request, Response, Next } from 'express';
import { TCheckInHistory } from '../../types';

const checkinHistory = require('../data');

export {};

const getCheckInHistory = (
  req: Request,
  res: Response,
  next: Next
): Response<TCheckInHistory> => res.status(200).send(checkinHistory);

module.exports = getCheckInHistory;