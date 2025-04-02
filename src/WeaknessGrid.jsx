import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import InteractionsGrid from "./InteractionsGrid";
function WeaknessGrid({ damageRelations }) {
  const doubleDamageFrom = Object.entries(damageRelations)
    .filter(([key, value]) => value === 2)
    .map(([key, value]) => {
      return key;
    });
  console.log(doubleDamageFrom);

  return doubleDamageFrom.length > 0 ? (
    <>
      <>
        <p>takes double damage from:</p>
        <InteractionsGrid interaction={doubleDamageFrom}></InteractionsGrid>
      </>
    </>
  ) : (
    <></>
  );
}
export default WeaknessGrid;
