// HousingStatsForm.jsx
import React from "react";

const H_StatsForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mb-4">
      <label>Total Rooms:</label>
      <input
        type="number"
        name="total_rooms"
        value={formData.total_rooms || ''}
        onChange={handleChange}
        className="block w-full"
      />

      <label>Total Bedrooms:</label>
      <input
        type="number"
        name="total_bedrooms"
        value={formData.total_bedrooms || ''}
        onChange={handleChange}
        className="block w-full"
      />

      <label>Population:</label>
      <input
        type="number"
        name="population"
        value={formData.population || ''}
        onChange={handleChange}
        className="block w-full"
      />

      <label>Households:</label>
      <input
        type="number"
        name="households"
        value={formData.households || ''}
        onChange={handleChange}
        className="block w-full"
      />
    </div>
  );
};

export default H_StatsForm;
