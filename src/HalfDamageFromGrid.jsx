import { useEffect, useState } from "react";
import InteractionsGrid from "./InteractionsGrid";
function HalfDamageFromGrid({ damageRelations }) {
  const [halfDamageFrom, setHalfDamageFrom] = useState([]);
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
        <p>takes 1/2 damage from:</p>
        <InteractionsGrid interaction={halfDamageFrom}></InteractionsGrid>
      </>
    </>
  ) : (
    <></>
  );
}
export default HalfDamageFromGrid;
