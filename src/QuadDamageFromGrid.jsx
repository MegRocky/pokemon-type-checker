import { useEffect, useState } from "react";

import InteractionsGrid from "./InteractionsGrid";
function QuadDamageFromGrid({ damageRelations }) {
  const [quadDamageFrom, setQuadDamageFrom] = useState([]);

  useEffect(() => {
    const dmgArr = [];
    for (let type in damageRelations) {
      if (damageRelations[type] === 4) {
        dmgArr.push(type);
      }
    }
    setQuadDamageFrom(dmgArr);
  }, [damageRelations]);

  return quadDamageFrom.length > 0 ? (
    <>
      <>
        <p>takes 4x damage from:</p>
        <InteractionsGrid interaction={quadDamageFrom}></InteractionsGrid>
      </>
    </>
  ) : (
    <></>
  );
}
export default QuadDamageFromGrid;
