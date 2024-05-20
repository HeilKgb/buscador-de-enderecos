import React, { useState } from 'react';
import axios from 'axios';
import './AddressForm.css';

const AddressForm = () => {
  const [formData, setFormData] = useState({
    nickname: '',
    street: '',
    city: '',
    state: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/addresses', formData);
      console.log('Address created:', response.data);

    } catch (error) {
      console.error('Error creating address:', error);
    }
  };

  return (
    <div className="address-form-container">
      <form className="address-form" onSubmit={handleSubmit}>
        <h2>Cadastrar Novo Endereço</h2>
        <div>
          <label htmlFor="nickname">Apelido do Endereço:</label>
          <input type="text" id="nickname" name="nickname" value={formData.nickname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="street">Rua:</label>
          <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="city">Cidade:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="state">Estado:</label>
          <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="country">País:</label>
          <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AddressForm;
