// learned error handling from : https://codeburst.io/better-error-handling-in-express-js-b118fc29e9c7

const { GeneralError } = require("../utils/errors");

const handleErrors = (err, _req, res, _next) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: "error",
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: err.message,
  });
};

module.exports = handleErrors;
