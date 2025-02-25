// src/store/actions/denominationActions.js
export const CALCULATE_DENOMINATIONS = 'CALCULATE_DENOMINATIONS';
export const RESET_DENOMINATIONS = 'RESET_DENOMINATIONS';

export const calculateDenominations = (amount) => {
  const denominations = [100, 50, 20, 10, 5, 1];
  let result = {};

  denominations.forEach(denom => {
    result[denom] = Math.floor(amount / denom);
    amount -= result[denom] * denom;
  });

  return {
    type: CALCULATE_DENOMINATIONS,
    payload: result,
  };
};

export const resetDenominations = () => ({
  type: RESET_DENOMINATIONS,
});
