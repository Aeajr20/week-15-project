



import React, { useState, useEffect } from 'react';
import HouseDetails from './HouseDetails';
import HouseForm from './HouseForm';
import axios from 'axios';

const HouseList = () => {
  const [houses, setHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get('https://668f69b580b313ba09180311.mockapi.io/Houses/api/v2/HouseApi');
        setHouses(response.data);
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    };

    fetchHouses();
  }, []);

  const handleEdit = (house) => {
    setSelectedHouse(house);
  };

  const handleDelete = async (houseId) => {
    try {
      await axios.delete(`https://668f69b580b313ba09180311.mockapi.io/Houses/api/v2/HouseApi/${houseId}`);
      setHouses(houses.filter((house) => house.id !== houseId));
      setSelectedHouse(null);
    } catch (error) {
      console.error('Error deleting house:', error);
    }
  };

  const handleCreate = () => {
    setSelectedHouse({}); // Initialize an empty object for new house creation
  };

  return (
    <div className="mt-4">
      <h2 className="mb-3">Houses</h2>
      <button className="btn btn-primary mb-3" onClick={handleCreate}>Create New House</button>
      <div className="row">
        {houses.map((house) => (
          <div key={house.id} className="col-md-4 mb-3">
            <HouseDetails house={house} onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        ))}
      </div>
      {selectedHouse && (
        <div className="mt-4">
          <HouseForm
            key={selectedHouse.id || 'new'}
            house={selectedHouse}
            onSave={() => setSelectedHouse(null)}
          />
        </div>
      )}
    </div>
  );
};

export default HouseList;
