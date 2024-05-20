import React, { useState } from 'react';
import axios from 'axios';
import './AddressPage.css';

const AddressPage = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);

  const handleChange = (e) => {
    setCep(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
    } catch (error) {
      console.error('Error fetching address:', error);
      setAddress(null);
    }
  };

  return (
    <div className="address-page-container">
      <h2>Consulta de Endereço</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cep}
          onChange={handleChange}
          placeholder="Informe o CEP"
        />
        <button type="submit">Consultar</button>
      </form>
      {address ? (
        <div className="address-details">
          <h3>Detalhes do Endereço</h3>
          <p>CEP: {address.cep}</p>
          <p>Rua: {address.logradouro}</p>
          <p>Bairro: {address.bairro}</p>
          <p>Cidade: {address.localidade}</p>
          <p>Estado: {address.uf}</p>
          <p>País: Brasil</p>
        </div>
      ) : (
        <div className="address-not-found">
          <p>Endereço não encontrado.</p>
          <button onClick={() => console.log('Redirecionar para a página de cadastro')}>Cadastrar Endereço</button>
        </div>
      )}
    </div>
  );
};

export default AddressPage;
