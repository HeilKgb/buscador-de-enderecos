import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddressList.css';

const AddressList = () => {
  const [addresses, setAddresses] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({
    id: '',
    userName: '',
    street: '',
    city: '',
    state: '',
    country: '',
    nickname: ''
  });

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const response = await axios.get('http://localhost:3000/addresses');
      setAddresses(response.data);
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/addresses/${id}`);
      fetchAddresses();
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/addresses/${id}`);
      const addressData = response.data;
      setUpdateFormData(addressData);
    } catch (error) {
      console.error('Error fetching address for update:', error);
    }
  };

  const handleChange = (e) => {
    setUpdateFormData({
      ...updateFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/addresses/${updateFormData.id}`, updateFormData);
      fetchAddresses();
      setUpdateFormData({
        id: '',
        userName: '',
        street: '',
        city: '',
        state: '',
        country: '',
        nickname: ''
      });
    } catch (error) {
      console.error('Error updating address:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Endereços Cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>Nome do Usuário</th>
            <th>Rua</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>País</th>
            <th>Apelido</th>
            <th>Excluir</th>
            <th>Atualizar</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address) => (
            <tr key={address.id}>
              <td>{address.userName}</td>
              <td>{address.street}</td>
              <td>{address.city}</td>
              <td>{address.state}</td>
              <td>{address.country}</td>
              <td>{address.nickname}</td>
              <td><input type="checkbox" onChange={() => handleDelete(address.id)} /></td>
              <td><input type="checkbox" onChange={() => handleUpdate(address.id)} /></td>
            </tr>
          ))}
        </tbody>
      </table>

      {updateFormData.id && (
        <div>
          <h2>Atualizar Endereço</h2>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={updateFormData.id} />
            <div>
              <label htmlFor="userName">Nome do Usuário:</label>
              <input type="text" id="userName" name="userName" value={updateFormData.userName} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="street">Rua:</label>
              <input type="text" id="street" name="street" value={updateFormData.street} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="city">Cidade:</label>
              <input type="text" id="city" name="city" value={updateFormData.city} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="state">Estado:</label>
              <input type="text" id="state" name="state" value={updateFormData.state} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="country">País:</label>
              <input type="text" id="country" name="country" value={updateFormData.country} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="nickname">Apelido:</label>
              <input type="text" id="nickname" name="nickname" value={updateFormData.nickname} onChange={handleChange} />
            </div>
            <button type="submit">Atualizar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddressList;
