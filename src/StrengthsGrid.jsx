import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import TypeCard from "./TypeCard";
import InteractionsGrid from "./InteractionsGrid";

function StrengthsGrid({ currentPokemonDetails }) {
  return doubleDamageTo.length > 0 ? (
    <>
      <p>deals double damage to:</p>
      <InteractionsGrid interaction={doubleDamageTo}></InteractionsGrid>
    </>
  ) : (
    <></>
  );
}
export default StrengthsGrid;
