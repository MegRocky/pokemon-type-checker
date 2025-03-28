import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import InteractionsGrid from "./InteractionsGrid";
import QuadDamageFromGrid from "./QuadDamageFromGrid";
function DualTypeGrids({ currentPokemonDetails }) {
  const quadDamageFrom = [];
  const typeFirst = currentPokemonDetails.types[0].type.name;
  const typeSecond = currentPokemonDetails.types[1].type.name;

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
    </>
  );
}
export default DualTypeGrids;
