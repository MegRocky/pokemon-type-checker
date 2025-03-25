import StrengthsGrid from "./StrengthsGrid";

function PokemonDetails({ currentPokemonDetails }) {
  return (
    <>
      <h3>{currentPokemonDetails.name}</h3>
      <p>is a {currentPokemonDetails.types[0].type.name} type </p>
      <img
        src={`src/assets/${currentPokemonDetails.types[0].type.name}.png`}
      ></img>
      <StrengthsGrid types={currentPokemonDetails.types}></StrengthsGrid>
    </>
  );
}
export default PokemonDetails;
