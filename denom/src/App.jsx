// src/App.jsx
import React from 'react';
import Denomination from './component/denomination/Denomination';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Calcul des Dénomination(s)</h1>
      <Denomination />
    </div>
  );
};

export default App;
