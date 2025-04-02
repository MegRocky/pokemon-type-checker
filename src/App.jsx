import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import NameSearch from "./NameSearch";
import { getPokemonDetails, getTypeDetails } from "../api";
import PokemonDetails from "./PokemonDetails";

function App() {
  const [currentPokemonName, setCurrentPokemonName] = useState("");
  const [currentPokemonDetails, setCurrentPokemonDetails] = useState({});

  useEffect(() => {
    if (currentPokemonName.length > 0) {
      getPokemonDetails(currentPokemonName).then((response) => {
        setCurrentPokemonDetails(response);
      });
    }
  }, [currentPokemonName]);

  return (
    <>
      <NameSearch
        setCurrentPokemonName={setCurrentPokemonName}
        currentPokemonName={currentPokemonName}
      ></NameSearch>
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
