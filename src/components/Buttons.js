function Buttons({
  amountSort,
  alphabetSort,
  amountOfAllNames,
  handleChange,
  handleSubmit,
  inputValue,
}) {
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
