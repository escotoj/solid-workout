import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Solid Workout App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Log</button>
      </form>
      {submittedValue && (
        <div>
          <h2>Workout:</h2>
          <p>{submittedValue}</p>
        </div>
      )}
    </div>
  );
};

export default App;
