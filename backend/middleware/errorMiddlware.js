const errorHanlder = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500; // if res.statusCode is there return res.statusCode else return 500

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack, //we want this condition to work in dev mode only -  if in production mode retuen null, else show error stack which show additional informations
  });
};

module.exports = {
  errorHanlder,
};
