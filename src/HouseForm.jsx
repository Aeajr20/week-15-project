// HouseForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const HouseForm = ({ house, onSave }) => {
  const [formData, setFormData] = useState({
    type: house.type || '',
    address: house.address || '',
    owner: house.owner || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (house.id) {
        await axios.put(`https://668f69b580b313ba09180311.mockapi.io/Houses/api/v2/HouseApi/${house.id}`, formData);
      } else {
        await axios.post('https://668f69b580b313ba09180311.mockapi.io/Houses/api/v2/HouseApi', formData);
      }
      onSave();
    } catch (error) {
      console.error('Error saving house:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="type"
        placeholder="Type"
        value={formData.type}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="owner"
        placeholder="Owner"
        value={formData.owner}
        onChange={handleChange}
        required
      />
      <button type="submit">{house.id ? 'Update' : 'Create'} House</button>
    </form>
  );
};

export default HouseForm;
