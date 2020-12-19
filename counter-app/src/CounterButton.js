import React, { useState } from 'react';

export default function CounterButton() {
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
    <>
      <button className="counter-button" onClick={fetchCount}>
          Get Count
      </button>
      {
        count > 0 && 
        <div className="count-container">
          {
            loading ? 
              <span className="loading-message">Loading&hellip;</span>
              :
              <span>{count} hits</span>
          }
        </div>
      }
    </>
  )
}