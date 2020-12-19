import { useState, useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
function App() {
  const fetchUrl = "https://intense-peak-63735.herokuapp.com/";

  const [names, setNames] = useState([]);

  const [nameToSortBy, setNameToSortBy] = useState("");

  const [namesAmount, setNamesAmount] = useState({});

  const [loading, setLoading] = useState(true);

  const fetchNames = () => {
    fetch(fetchUrl)
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

  const handleChange = (value) => {
    setNameToSortBy(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameToSortBy === "") {
      return;
    }

    /** Setting the first letter to uppercase and all the subsequent letters to be lowercase */
    const formattedName =
      nameToSortBy[0].toUpperCase() + nameToSortBy.slice(1).toLocaleLowerCase();

    let match = names.find(({ name }) => name === formattedName);

    /** If no matches are found, .find() returns undefined. */
    if (match !== undefined) {
      setNamesAmount({
        text: `The amount of people named ${match.name} is:`,
        amount: match.amount,
      });
    } else {
      alert(`No people named ${formattedName} were found!`);
    }
    setNameToSortBy("");
  };

  /** Fetch names when component mounts */
  useEffect(() => {
    fetchNames();
  }, []);

  useEffect(() => {}, [namesAmount, names]);

  return (
    <div className="container">
      <Buttons
        amountSort={amountSort}
        alphabetSort={alphabetSort}
        amountOfAllNames={amountOfAllNames}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputValue={nameToSortBy}
      />

      {/** While App is fetching show loading text.
       * Then if user has sorted by total amount of names or by one name
       * (i.e. namesAmount has an object with text property) then show that.
       * Else, map and show contents of names array */}
      <div className="list">
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
    </div>
  );
}

export default App;
