import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import NameSearch from "./NameSearch";
import { getPokemonDetails, getTypeDetails } from "../api";
import PokemonDetails from "./PokemonDetails";

function App() {
  const [currentPokemonName, setCurrentPokemonName] = useState("");
  const [currentPokemonDetails, setCurrentPokemonDetails] = useState({});
  const [nameErr, setNameErr] = useState(false);
  useEffect(() => {
    setNameErr(false);
    if (currentPokemonName.length > 0) {
      getPokemonDetails(currentPokemonName)
        .then((response) => {
          setCurrentPokemonDetails(response);
        })
        .catch((err) => {
          console.log(err);
          setNameErr(true);
        });
    }
  }, [currentPokemonName]);

  return (
    <>
      <NameSearch
        setCurrentPokemonName={setCurrentPokemonName}
        currentPokemonName={currentPokemonName}
      ></NameSearch>
      {nameErr ? <p>Please enter a valid pokemon name bestie</p> : ""}
      {currentPokemonDetails.name ? (
        <>
          <PokemonDetails
            currentPokemonDetails={currentPokemonDetails}
            currentPokemonName={currentPokemonName}
          ></PokemonDetails>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
