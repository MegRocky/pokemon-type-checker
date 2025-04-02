import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import TypeCard from "./TypeCard";
import InteractionsGrid from "./InteractionsGrid";
function HalfDamageFromGrid({ damageRelations }) {
  const [halfDamageFrom, setHalfDamageFrom] = useState([]);
  console.log(halfDamageFrom);
  useEffect(() => {
    const dmgArr = [];
    for (let type in damageRelations) {
      if (damageRelations[type] === -2) {
        dmgArr.push(type);
      }
    }
    setHalfDamageFrom(dmgArr);
  }, [damageRelations]);

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
