

// HousesApi.jsx
import axios from 'axios';

const API_URL = 'https://668f69b580b313ba09180311.mockapi.io/Houses/api/v2/HouseApi';

export const fetchHouses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching houses:', error);
    throw error;
  }
};

export const createHouse = async (newHouse) => {
  try {
    const response = await axios.post(API_URL, newHouse);
    return response.data; // Return the newly created house data
  } catch (error) {
    console.error('Error creating house:', error);
    throw error;
  }
  // this.fetchHouses()
  // window.location.reload();
};

export const updateHouse = async (houseId, updatedHouse) => {
  try {
    const response = await axios.put(`${API_URL}/${houseId}`, updatedHouse);
    return response.data; // Return the updated house data
  } catch (error) {
    console.error('Error updating house:', error);
    throw error;
  }
};

export const deleteHouse = async (houseId) => {
  try {
    await axios.delete(`${API_URL}/${houseId}`);
  } catch (error) {
    console.error('Error deleting house:', error);
    throw error;
  }
};
