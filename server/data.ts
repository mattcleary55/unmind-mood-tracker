const checkIn1 = {
  moodRating: 7,
  feelingDescriptions: ['happy', 'curious'],
  time: Date.now(),
  comment: 'Today I enjoyed spending time with my family',
};

const checkIn2 = {
  moodRating: 5,
  feelingDescriptions: ['bored'],
  time: Date.now(),
  comment: 'Today was boring',
};

const checkIn3 = {
  moodRating: 2,
  feelingDescriptions: ['depressed', 'sad'],
  time: Date.now(),
  comment: 'Today was rough',
};

const checkinHistory = [checkIn1, checkIn2, checkIn3];

module.exports = checkinHistory;
