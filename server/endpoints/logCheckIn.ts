import { Request, Response } from 'express';
import { TCheckInHistory } from '../../types';

const checkinHistory = require('../data');

export {};

const logCheckIn = (req: Request, res: Response): Response<TCheckInHistory> => {
  checkinHistory.push(req.body); // pretty trusting!
  return res.status(200).send(checkinHistory);
};

module.exports = logCheckIn;
