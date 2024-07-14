// Import necessary modules from the React package
import React from 'react';

// Define the HouseDetails component

// It accepts three props: 'house', 'onEdit', and 'onDelete'.

// 'house' is the house data.

// 'onEdit' is a function that will be called when the Edit button is clicked.

// 'onDelete' is a function that will be called when the Delete button is clicked.
const HouseDetails = ({ house, onEdit, onDelete }) => {
  // Render the component
  return (
    <div>
      {/* Display the type of the house */}
      <h3>{house.type} House</h3>

      {/* Display the address of the house */}
      <p>Address: {house.address}</p>

      {/* Display the owner of the house */}
      <p>Owner: {house.owner}</p>

      {/* Display the Edit button. When it's clicked, call the onEdit function with the house data. */}
      <button onClick={() => onEdit(house)}>Edit</button>
      
      {/* Display the Delete button. When it's clicked, call the onDelete function with the house id. */}
      <button onClick={() => onDelete(house.id)}>Delete</button>
    </div>
  );
};

// Export the HouseDetails component, so it can be imported and used in other files.
export default HouseDetails;
