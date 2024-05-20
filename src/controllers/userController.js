const userService = require('../services/userService');

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await userService.createUser({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
