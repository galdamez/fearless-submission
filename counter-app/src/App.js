import { useState } from 'react';
import './App.css';
import CounterButton from './CounterButton';
import LoadingMessage from './CountView';
import { fetchCount } from './services/fetchService';

export default function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div className="app-container">
      <CounterButton clickHandler={() => fetchCount(setCount, setLoading)} />
      <LoadingMessage count={count} loading={loading} />
    </div>
  );
};