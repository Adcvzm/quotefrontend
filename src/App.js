import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({ text: '', author: '' });

  const fetchQuote = async () => {
    try {
      const res = await fetch('https://quotebackend-t2oh.onrender.com/api/quote');
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.error("Failed to fetch quote", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      <div className="container">
        <div className="quote-box">
          <div className="quote">"{quote.text}"</div>
          <div className="author">— {quote.author}</div>
          <button onClick={fetchQuote}>New Quote</button>
        </div>
      </div>
    </>
  );
}

export default App;
