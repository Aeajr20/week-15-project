// Import necessary modules from their respective packages
import React, { useState } from 'react';
import axios from 'axios';

// The HouseForm component handles Create and Update operations for a house
// It accepts two props: 'house' and 'onSave'.
// 'house' is the house data.
// 'onSave' is a function that will be called when the form is submitted.
const HouseForm = ({ house, onSave }) => {
  // State variable for the form data
  const [formData, setFormData] = useState({
    type: house.type || '',
    address: house.address || '',
    owner: house.owner || '',
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (house.id) {
        // If the house has an id, it's an existing house. Update it.
        await axios.put(`https://668f69b580b313ba09180311.mockapi.io/Houses/api/v2/HouseApi/${house.id}`, formData);
      } else {
        // If the house doesn't have an id, it's a new house. Create it.
        await axios.post('https://668f69b580b313ba09180311.mockapi.io/Houses/api/v2/HouseApi', formData);
      }
      // Call the onSave function after creating or updating the house
      onSave();
    } catch (error) {
      console.error('Error saving house:', error);
    }
  };

  // Render the component
  return (
    <form onSubmit={handleSubmit}>
      {/* Input for the house type */}
      <input
        type="text"
        name="type"
        placeholder="Type"
        value={formData.type}
        onChange={handleChange}
        required
      />
      {/* Input for the house address */}
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      {/* Input for the house owner */}
      <input
        type="text"
        name="owner"
        placeholder="Owner"
        value={formData.owner}
        onChange={handleChange}
        required
      />
      {/* Submit button for the form */}
      <button type="submit">{house.id ? 'Update' : 'Create'} House</button>
    </form>
  );
};

// Export the HouseForm component, so it can be imported and used in other files.
export default HouseForm;
