import { useState } from 'react';
import GeoInp from './components/GeoIn';
import H_StatsForm from './components/H_StatsForm';
import IncomeAgeForm from './components/IncomeAgeForm';
import O_P_Selector from './components/O_P_selector';
import axios from 'axios';
import CountUp from 'react-countup'; // 📦 count-up animation

function App() {
  const [formData, setFormData] = useState({});
  const [price, setPrice] = useState(null);
  const [showPrice, setShowPrice] = useState(false);

  const handleSubmit = async () => {
    console.log("Sending:", formData);

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/predict_house_price',
        formData
      );
      console.log("Backend response:", response.data);
      setPrice(response.data.estimated_price);
      setShowPrice(true);
    } catch (error) {
      console.error("Prediction failed:", error);
    }
  };

  return (
    <div className="form-wrapper">
      <h1>Affordable Housing App</h1>

      <GeoInp formData={formData} setFormData={setFormData} />
      <H_StatsForm formData={formData} setFormData={setFormData} />
      <IncomeAgeForm formData={formData} setFormData={setFormData} />
      <O_P_Selector formData={formData} setFormData={setFormData} />

      <button onClick={handleSubmit}>Predict</button>

      {price !== null && (
        <div className={`price-reveal ${showPrice ? 'show' : ''}`}>
          <h2>Estimated House Price</h2>
          <span>
            <CountUp
              start={0}
              end={price}
              duration={2.5}
              decimals={2}
              separator=","
              prefix="$"
            />
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
