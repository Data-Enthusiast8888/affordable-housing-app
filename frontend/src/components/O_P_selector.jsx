// O_P_selector.jsx
import React from "react";

const O_P_Selector = ({ formData, setFormData }) => {
  const proximityOptions = ['INLAND', 'ISLAND', 'NEAR_BAY', 'NEAR_OCEAN'];

  const handleChange = (e) => {
    const selected = e.target.value;

    // Generate one-hot encoded values
    const encodedProximity = proximityOptions.reduce((acc, option) => {
      acc[`ocean_proximity_${option}`] = option === selected ? 1 : 0;
      return acc;
    }, {});

    setFormData(prev => ({
      ...prev,
      ...encodedProximity,
      ocean_proximity: selected // optional, used for UI display
    }));
  };

  return (
    <div className="mb-4">
      <label className="block font-semibold mb-2">Ocean Proximity:</label>
      {proximityOptions.map(option => (
        <label key={option} className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="ocean_proximity"
            value={option}
            checked={formData.ocean_proximity === option}
            onChange={handleChange}
          />
          <span className="ml-1">{option.replace("_", " ")}</span>
        </label>
      ))}
    </div>
  );
};

export default O_P_Selector;
