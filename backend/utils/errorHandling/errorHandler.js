const errorHandler = (res, status, message) => {
  return res.status(status).send({ error: message });
};

module.exports = errorHandler;
