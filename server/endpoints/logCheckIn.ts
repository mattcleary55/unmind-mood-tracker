import { Request, Response, Next } from 'express';
import { TCheckInHistory } from '../../types';

const checkinHistory = require('../data');

export {};

const logCheckIn = (
  req: Request,
  res: Response,
  next: Next
): Response<TCheckInHistory> => {
  checkinHistory.push(req.body); // pretty trusting!
  return res.status(200).send(checkinHistory);
};

module.exports = logCheckIn;
