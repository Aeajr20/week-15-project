// Import the axios library, which is used to make HTTP requests
import axios from 'axios';

// Define the base URL for the API
const API_URL = 'https://668f69b580b313ba09180311.mockapi.io/Houses/api/v2/HouseApi';

// Define an asynchronous function to fetch houses from the API
export const fetchHouses = async () => {
  try {
    // Send a GET request to the API URL
    const response = await axios.get(API_URL);
    // Return the data from the response
    return response.data;
  } catch (error) {
    // If an error occurs, log it to the console and re-throw it
    console.error('Error fetching houses:', error);
    throw error;
  }
};

// Define an asynchronous function to create a new house
export const createHouse = async (newHouse) => {
  try {
    // Send a POST request to the API URL, with the new house data as the request body
    const response = await axios.post(API_URL, newHouse);
    // Return the data from the response (this should be the newly created house)
    return response.data; 
  } catch (error) {
    // If an error occurs, log it to the console and re-throw it
    console.error('Error creating house:', error);
    throw error;
  }
};

// Define an asynchronous function to update an existing house
export const updateHouse = async (houseId, updatedHouse) => {
  try {
    // Send a PUT request to the URL for the specific house, with the updated house data as the request body
    const response = await axios.put(`${API_URL}/${houseId}`, updatedHouse);
    // Return the data from the response (this should be the updated house)
    return response.data; 
  } catch (error) {
    // If an error occurs, log it to the console and re-throw it
    console.error('Error updating house:', error);
    throw error;
  }
};

// Define an asynchronous function to delete a house
export const deleteHouse = async (houseId) => {
  try {
    // Send a DELETE request to the URL for the specific house
    await axios.delete(`${API_URL}/${houseId}`);
  } catch (error) {
    // If an error occurs, log it to the console and re-throw it
    console.error('Error deleting house:', error);
    throw error;
  }
};
