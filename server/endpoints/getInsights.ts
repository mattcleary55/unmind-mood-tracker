export {};
const getInsights = (req, res, next) => {
  return res.status(200).send('Hola Señor');
};

module.exports = { getInsights };
