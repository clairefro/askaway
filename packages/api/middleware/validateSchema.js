const validateBodySchema = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    await schema.validate(body, { strict: true });
    next();
  } catch (e) {
    res.status(400).json({
      message: "Input failed validation.",
      error: JSON.stringify(e),
    });
  }
};

const validateParamsSchema = (schema) => async (req, res, next) => {
  const params = req.params;
  try {
    await schema.validate(params, { strict: true });
    next();
  } catch (e) {
    res.status(400).json({
      message: "Input failed validation.",
      error: JSON.stringify(e),
    });
  }
};

module.exports = {
  validateBodySchema,
  validateParamsSchema,
};
