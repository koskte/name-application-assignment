import React, { useState, useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
function App() {
  //const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const fetchUrl = "https://intense-peak-63735.herokuapp.com/";

  const [names, setNames] = useState([]);

  const [loading, setLoading] = useState(true);

  const amountSort = () => {
    names.sort((a, b) => {
      return b.amount - a.amount;
    });
    let sorted = [...names];
    setNames(sorted);
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
    let sorted = [...names];
    setNames(sorted);
  };

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setNames(data.names))
      .then(() => setLoading(false));
  }, []);

  return (
    <div>
      <Buttons amountSort={amountSort} alphabetSort={alphabetSort} />
      {loading ? (
        <p>Loading list of names from an API...</p>
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
