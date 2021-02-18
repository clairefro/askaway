const validateSchema = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    await schema.validate(body);
    next();
  } catch (e) {
    res.status(400).json({
      message: "Input failed validation.",
      error: e.errors.join(", "),
    });
  }
};

module.exports = {
  validateSchema,
};
