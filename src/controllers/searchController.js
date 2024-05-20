const addressService = require('../services/addressService');

exports.searchByLocation = async (req, res) => {
  try {
    const { state, city, country } = req.query;
    const addresses = await addressService.getAddressByLocation(state, city, country);
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
