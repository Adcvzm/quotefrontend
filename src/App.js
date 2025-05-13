import React, { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const quoteBoxRef = useRef(null);

  const colors = [
    'rgba(162, 123, 92, 1)',   // Midnight blue
    'rgba(87, 73, 100, 1)',    // Dark purple
    ' rgba(176, 48, 82, 1)',     // Dark green
    'rgba(112, 92, 83, 1)',   // Dark slate blue
    'rgba(105, 117, 101, 1)',     // Dark red
    'rgba(45, 50, 80, 1)',    // Dark slate gray
    'rgba(58, 56, 69, 1)'    // Dark magenta
  ];

  const changeQuoteBoxColor = () => {
    if (quoteBoxRef.current) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      quoteBoxRef.current.style.setProperty('--random-bg-color', randomColor);
      quoteBoxRef.current.classList.add('random-color');
    }
  };

  const fetchQuote = async () => {
    try {
      const res = await fetch('https://quotebackend-t2oh.onrender.com/api/quote');
      const data = await res.json();
      setQuote(data);
      changeQuoteBoxColor();
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
        <div className="quote-box" ref={quoteBoxRef}>
          <div className="quote">"{quote.text}"</div>
          <div className="author">— {quote.author}</div>
          <button onClick={fetchQuote}>New Quote</button>
        </div>
      </div>
    </>
  );
}

export default App;
