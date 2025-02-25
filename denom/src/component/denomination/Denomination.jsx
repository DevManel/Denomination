// src/components/Denomination.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateDenominations, resetDenominations } from '../../store/action/denominationActions';
import Button from '../button/Button';
import Input from '../input/Input';

const Denomination = () => {
  const [amount, setAmount] = useState('');
  const denominations = useSelector(state => state.denominations);
  const dispatch = useDispatch();

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCalculate = () => {
    if (amount > 0) {
      dispatch(calculateDenominations(Number(amount)));
    }
  };

  const handleReset = () => {
    setAmount('');
    dispatch(resetDenominations());
  };

  return (
    <div>
      <h2>Saisir le montant</h2>
      <Input value={amount} onChange={handleAmountChange} placeholder="Entrez le montant" />
      <Button onClick={handleCalculate}>Dénomination</Button>
      <Button onClick={handleReset}>Reset</Button>

      <div>
        <h3>Dénomination</h3>
        {Object.keys(denominations).map((denom, index) => (
          <div key={index}>
            Dénomination {denom} unité(s) : {denominations[denom]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Denomination;
