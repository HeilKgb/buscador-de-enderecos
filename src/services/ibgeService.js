const axios = require('axios');

exports.getAddressFromIBGE = async (cep) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.data.erro) {
      throw new Error('Address not found in IBGE');
    }
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from IBGE API');
  }
};
