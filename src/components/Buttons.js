import React from "react";

function Buttons({ amountSort, alphabetSort, amountOfAllNames }) {
  return (
    <div>
      <p>Sort by: </p>
      <button
        onClick={() => {
          amountSort();
        }}
      >
        Popularity
      </button>
      <button
        onClick={() => {
          alphabetSort();
        }}
      >
        Alphabetical order
      </button>
      <button
        onClick={() => {
          amountOfAllNames();
        }}
      >
        Total amount of all names
      </button>
    </div>
  );
}

export default Buttons;
