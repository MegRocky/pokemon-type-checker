import DualTypeGrids from "./DualTypeGrids";
import HalfDamageFromGrid from "./HalfDamageFromGrid";
import HalfDamageToGrid from "./HalfDamageToGrid";
import ImmunityGrid from "./ImmunityGrid";
import StrengthsGrid from "./StrengthsGrid";
import WeaknessGrid from "./WeaknessGrid";

function PokemonDetails({ currentPokemonDetails }) {
  return (
    <>
      <h3>{currentPokemonDetails.name}</h3>
      {currentPokemonDetails.types.length === 1 ? (
        <>
          {" "}
          <p>is a {currentPokemonDetails.types[0].type.name} type </p>
          <img
            src={`src/assets/${currentPokemonDetails.types[0].type.name}.png`}
          ></img>
          <ImmunityGrid
            currentPokemonDetails={currentPokemonDetails}
          ></ImmunityGrid>
          <StrengthsGrid
            currentPokemonDetails={currentPokemonDetails}
          ></StrengthsGrid>
          <WeaknessGrid
            currentPokemonDetails={currentPokemonDetails}
          ></WeaknessGrid>
          <HalfDamageToGrid
            currentPokemonDetails={currentPokemonDetails}
          ></HalfDamageToGrid>
          <HalfDamageFromGrid
            currentPokemonDetails={currentPokemonDetails}
          ></HalfDamageFromGrid>{" "}
        </>
      ) : (
        <DualTypeGrids
          currentPokemonDetails={currentPokemonDetails}
        ></DualTypeGrids>
      )}
    </>
  );
}
export default PokemonDetails;
