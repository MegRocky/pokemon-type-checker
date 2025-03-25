import StrengthsGrid from "./StrengthsGrid";
import WeaknessGrid from "./WeaknessGrid";

function PokemonDetails({ currentPokemonDetails }) {
  return (
    <>
      <h3>{currentPokemonDetails.name}</h3>
      <p>is a {currentPokemonDetails.types[0].type.name} type </p>
      <img
        src={`src/assets/${currentPokemonDetails.types[0].type.name}.png`}
      ></img>
      <StrengthsGrid
        currentPokemonDetails={currentPokemonDetails}
      ></StrengthsGrid>
      <WeaknessGrid
        currentPokemonDetails={currentPokemonDetails}
      ></WeaknessGrid>
    </>
  );
}
export default PokemonDetails;
