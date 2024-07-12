// HouseDetails.jsx
import React from 'react';

const HouseDetails = ({ house, onEdit, onDelete }) => {
  return (
    <div>
      <h3>{house.type} House</h3>
      <p>Address: {house.address}</p>
      <p>Owner: {house.owner}</p>
      <button onClick={() => onEdit(house)}>Edit</button>
      <button onClick={() => onDelete(house.id)}>Delete</button>
    </div>
  );
};

export default HouseDetails;
