import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import TypeCard from "./TypeCard";
import InteractionsGrid from "./InteractionsGrid";
function HalfDamageFromGrid({ currentPokemonDetails }) {
  return halfDamageFrom.length > 0 ? (
    <>
      <>
        <p>takes half damage from:</p>
        <InteractionsGrid interaction={halfDamageFrom}></InteractionsGrid>
      </>
    </>
  ) : (
    <></>
  );
}
export default HalfDamageFromGrid;
