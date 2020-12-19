import "./Buttons.css";

function Buttons({
  amountSort,
  alphabetSort,
  amountOfAllNames,
  handleChange,
  handleSubmit,
  inputValue,
}) {
  return (
    <div className="container">
      <p className="sortText">Sort by: </p>

      <button
        onClick={() => {
          amountSort();
        }}
      >
        POPULARITY
      </button>

      <button
        onClick={() => {
          alphabetSort();
        }}
      >
        ALPHABET
      </button>

      <button
        onClick={() => {
          amountOfAllNames();
        }}
      >
        TOTAL AMOUNT
      </button>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={inputValue}
          placeholder="Input name"
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Buttons;
