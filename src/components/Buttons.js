import React from "react";

function Buttons({ amountSort, alphabetSort }) {
  return (
    <div>
      <button
        onClick={() => {
          amountSort();
        }}
      >
        amount
      </button>
      <button
        onClick={() => {
          alphabetSort();
        }}
      >
        alphabetically
      </button>
    </div>
  );
}

export default Buttons;
