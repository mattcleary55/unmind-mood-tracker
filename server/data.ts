const moment = require('moment');

const checkIn1 = {
  moodRating: 7,
  feelingDescriptions: ['Happy', 'Curious'],
  time: moment('2020-05-24 12:06:03').valueOf(),
  comment: 'Today I enjoyed spending time with my family',
};

const checkIn2 = {
  moodRating: 5,
  feelingDescriptions: ['Bored'],
  time: moment('2020-05-25 08:02:03').valueOf(),
  comment: 'Today was boring',
};

const checkIn3 = {
  moodRating: 2,
  feelingDescriptions: ['Depressed', 'Sad'],
  time: moment('2020-05-26 14:23:03').valueOf(),
  comment: 'Today was rough',
};

const checkinHistory = [checkIn1, checkIn2, checkIn3];

module.exports = checkinHistory;
