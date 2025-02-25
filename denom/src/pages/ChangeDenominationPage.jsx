// src/pages/ChangeDenominationPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { calculateDenominations } from '../store/action/denominationActions';

const ChangeDenominationPage = () => {
  const [selectedDenomination, setSelectedDenomination] = useState([1, 5, 10, 20, 50, 100]);
  const dispatch = useDispatch();

  const handleDenominationChange = (e) => {
    const value = JSON.parse(e.target.value);
    setSelectedDenomination(value);
    dispatch(calculateDenominations(253, value)); // Recalcule les dénominations avec la nouvelle sélection
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Choisir une dénomination</h1>
      <div>
        <label>
          <input
            type="radio"
            name="denomination"
            value="[1, 5, 10, 20, 50, 100]"
            onChange={handleDenominationChange}
            defaultChecked
          />
          Dénomination 1, 5, 10, 20, 50, 100
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="denomination"
            value="[1, 2, 5, 10, 20, 30, 50]"
            onChange={handleDenominationChange}
          />
          Dénomination 1, 2, 5, 10, 20, 30, 50
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="denomination"
            value="[1, 10, 20, 30, 40, 50, 100]"
            onChange={handleDenominationChange}
          />
          Dénomination 1, 10, 20, 30, 40, 50, 100
        </label>
      </div>
    </div>
  );
};

export default ChangeDenominationPage;
