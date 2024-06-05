import { useState } from 'react';
import './index.css';
import carsData from './data';
import Cars from './Cars';

function App() {
  const [cars, setCars] = useState(carsData);

  return (
    <main>
      <Cars cars={cars} />
    </main>
  );
}

export default App;
