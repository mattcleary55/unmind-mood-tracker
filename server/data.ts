const checkIn1 = {
  moodRating: 7,
  feelingDescriptions: ['Happy', 'Curious'],
  time: Date.now(),
  comment: 'Today I enjoyed spending time with my family',
};

const checkIn2 = {
  moodRating: 5,
  feelingDescriptions: ['Bored'],
  time: Date.now(),
  comment: 'Today was boring',
};

const checkIn3 = {
  moodRating: 2,
  feelingDescriptions: ['Depressed', 'Sad'],
  time: Date.now(),
  comment: 'Today was rough',
};

const checkinHistory = [checkIn1, checkIn2, checkIn3];

module.exports = checkinHistory;
