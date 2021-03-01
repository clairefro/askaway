const validateBodySchema = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    await schema.validate(body, { strict: true });
    next();
  } catch (e) {
    res.status(400).json({
      message: "Input failed validation.",
      error: e.errors.join(", "),
    });
  }
};

const validateParamsSchema = (schema) => async (req, res, next) => {
  const params = req.params;
  console.log({ req });
  try {
    await schema.validate(params, { strict: true });
    next();
  } catch (e) {
    res.status(400).json({
      message: "Input failed validation.",
      error: e.errors.join(", "),
    });
  }
};

module.exports = {
  validateBodySchema,
  validateParamsSchema,
};
