import React from 'react';

const FeelingSelector: React.FC = () => {
  const wrapperStyle = { width: 400, margin: 50 };

  return (
    <div style={wrapperStyle}>
      <p>
        <b>Step 2:</b> Which of the following describe your current mood?
      </p>

      <button>Depressed</button>

      <button>Optimistic</button>

      <button>Bored</button>

      <button>Happy</button>
    </div>
  );
};

export default FeelingSelector;
