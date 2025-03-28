import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import InteractionsGrid from "./InteractionsGrid";
import QuadDamageFromGrid from "./QuadDamageFromGrid";
import QuarterDamageFromGrid from "./QuarterDamageFrom";

function DualTypeGrids({ currentPokemonDetails }) {
  return (
    <>
      <p>
        is a {currentPokemonDetails.types[0].type.name} and{" "}
        {currentPokemonDetails.types[1].type.name} type{" "}
      </p>
      <img
        src={`src/assets/${currentPokemonDetails.types[0].type.name}.png`}
      ></img>{" "}
      <img
        src={`src/assets/${currentPokemonDetails.types[1].type.name}.png`}
      ></img>
      <QuadDamageFromGrid
        currentPokemonDetails={currentPokemonDetails}
      ></QuadDamageFromGrid>
      <QuarterDamageFromGrid
        currentPokemonDetails={currentPokemonDetails}
      ></QuarterDamageFromGrid>
    </>
  );
}
export default DualTypeGrids;
