const addressService = require('../services/addressService');

exports.createAddress = async (req, res) => {
  try {
    const { userId, nickname, street, city, state, country, zipCode } = req.body;
    if (!validarCEP(zipCode)) {
      return res.status(400).json({ error: 'CEP inválido' });
    }

    const newAddress = await addressService.createAddress({ userId, nickname, street, city, state, country, zipCode });
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAddressById = async (req, res) => {
  try {
    const address = await addressService.getAddressById(req.params.id);
    if (!address) {
      const addressFromIBGE = await ibgeService.getAddressFromIBGE(req.params.id);
      return res.status(200).json({
        message: "Endereço não encontrado nos seus salvos. Gostaria de salvar?",
        address: addressFromIBGE
      });
    }
    res.status(200).json(address);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.saveAddressFromIBGE = async (req, res) => {
  try {
    const { street, city, state, zipCode, userId } = req.body;
    const newAddress = await addressService.createAddress({ street, city, state, zipCode, userId });
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await addressService.getAllAddresses();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAddressById = async (req, res) => {
  try {
    const success = await addressService.deleteAddressById(req.params.id);
    if (success) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Endereço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
