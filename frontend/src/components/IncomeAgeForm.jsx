// IncomeAgeForm.jsx
import React from "react";

const IncomeAgeForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mb-4">
      <label>Housing Median Age:</label>
      <input
        type="number"
        name="housing_median_age"
        value={formData.housing_median_age || ''}
        onChange={handleChange}
        className="block w-full"
      />

      <label>Median Income:</label>
      <input
        type="number"
        name="median_income"
        value={formData.median_income || ''}
        onChange={handleChange}
        className="block w-full"
      />
    </div>
  );
};

export default IncomeAgeForm;
