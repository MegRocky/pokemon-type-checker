import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import NameSearch from "./NameSearch";
import { getPokemonDetails } from "../api";
import PokemonDetails from "./PokemonDetails";
import StrengthsGrid from "./StrengthsGrid";

function App() {
  const [currentPokemonName, setCurrentPokemonName] = useState("");
  const [currentPokemonDetails, setCurrentPokemonDetails] = useState({});
  useEffect(() => {
    if (currentPokemonName.length > 0) {
      getPokemonDetails(currentPokemonName).then((response) => {
        console.log(response);
        return setCurrentPokemonDetails(response);
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
          ></PokemonDetails>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
