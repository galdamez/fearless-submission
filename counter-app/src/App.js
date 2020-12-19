import './App.css';
import CounterButton from './CounterButton';
import LoadingMessage from './CountView';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchCount() {
    const url = 'https://api.countapi.xyz/hit/fearless-counter/1ccb732e-b55a-4404-ad3f-0f99c02fe44e';
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setCount(data.value);
    setLoading(false);
  }

  return (
    <div className="app-container">
      <CounterButton clickHandler={fetchCount} />
      <LoadingMessage count={count} loading={loading} />
    </div>
  );
};