// GeoIn.jsx
import React from "react";

const GeoIn = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mb-4">
      <label>Longitude:</label>
      <input
        type="number"
        name="longitude"
        value={formData.longitude || ''}
        onChange={handleChange}
        className="block w-full"
      />

      <label>Latitude:</label>
      <input
        type="number"
        name="latitude"
        value={formData.latitude || ''}
        onChange={handleChange}
        className="block w-full"
      />
    </div>
  );
};

export default GeoIn;
