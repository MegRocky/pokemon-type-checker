import { useState } from "react";

function NameSearch({ setCurrentPokemonName, currentPokemonName }) {
  const [inputName, setInputName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentPokemonName(inputName);
    setInputName("");
  };

  const inputHandler = (e) => {
    setInputName(e.target.value);
  };

  return (
    <>
      <form>
        {" "}
        <input
          type="text"
          value={inputName}
          onChange={inputHandler}
        ></input>{" "}
        <button type="submit" onClick={handleSubmit}>
          Go
        </button>{" "}
      </form>
    </>
  );
}

export default NameSearch;
