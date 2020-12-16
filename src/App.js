import React, { useState, useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
function App() {
  /**Using this proxy to bypass CORS */
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const fetchUrl = "https://intense-peak-63735.herokuapp.com/";

  const [names, setNames] = useState([]);

  const [namesAmount, setNamesAmount] = useState({});

  const [loading, setLoading] = useState(true);

  const fetchNames = () => {
    fetch(proxyUrl + fetchUrl)
      .then((res) => res.json())
      .then((data) => setNames(data.names))
      .then(() => setLoading(false));
  };

  const amountSort = () => {
    names.sort((a, b) => {
      return b.amount - a.amount;
    });
    setNames(names);
    setNamesAmount({});
  };

  const alphabetSort = () => {
    names.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return +1;
      }
      return 0;
    });
    setNames(names);
    /**Setting this to be an empty object hides namesAmount object. */
    setNamesAmount({});
  };

  const amountOfAllNames = () => {
    let sum = 0;
    for (let i = 0; i < names.length; i++) {
      sum += names[i].amount;
    }
    setNamesAmount({
      text: "The total amount of all the names is:",
      amount: sum,
    });
  };

  /** Fetch names when component mounts */
  useEffect(() => {
    fetchNames();
  }, []);

  useEffect(() => {}, [namesAmount, names]);

  return (
    <div>
      <Buttons
        amountSort={amountSort}
        alphabetSort={alphabetSort}
        amountOfAllNames={amountOfAllNames}
      />
      {loading ? (
        <p>Loading list of names from an API...</p>
      ) : namesAmount.hasOwnProperty("text") ? (
        <p>
          {namesAmount.text} {namesAmount.amount}
        </p>
      ) : (
        names.map((name, index) => (
          <p key={index}>
            {name.name}: {name.amount}
          </p>
        ))
      )}
    </div>
  );
}

export default App;
