// PredCard.jsx
import React from "react";

const PredCard = ({ price }) => {
  if (price === null || price === undefined) return null;

  return (
    <div className="mt-4 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">Estimated House Price:</h2>
      <p className="text-2xl text-green-600 font-bold">
        ${Number(price).toLocaleString()}
      </p>
    </div>
  );
};

export default PredCard;
