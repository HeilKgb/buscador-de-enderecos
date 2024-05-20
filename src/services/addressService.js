const Address = require('../models/addressModel');

exports.createAddress = async (addressData) => {
  try {
    const address = await Address.create(addressData);
    return address;
  } catch (error) {
    throw error;
  }
};

exports.getAddressById = async (id) => {
  try {
    const address = await Address.findByPk(id);
    return address;
  } catch (error) {
    throw error;
  }
};

exports.getAllAddresses = async () => {
  try {
    const addresses = await Address.findAll();
    return addresses;
  } catch (error) {
    throw error;
  }
};

exports.deleteAddressById = async (id) => {
  try {
    const address = await Address.findByPk(id);
    if (address) {
      await address.destroy();
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

exports.getAddressByLocation = async (state, city, country) => {
  try {
    const whereClause = {};

    if (state) {
      whereClause.state = state;
    }
    if (city) {
      whereClause.city = city;
    }
    if (country) {
      whereClause.country = country;
    }

    const addresses = await Address.findAll({
      where: whereClause
    });
    return addresses;
  } catch (error) {
    throw error;
  }
};