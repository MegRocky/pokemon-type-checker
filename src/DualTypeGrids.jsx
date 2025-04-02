import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import InteractionsGrid from "./InteractionsGrid";

function DualTypeGrids({ currentPokemonDetails, damageRelations }) {
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
    </>
  );
}
export default DualTypeGrids;
