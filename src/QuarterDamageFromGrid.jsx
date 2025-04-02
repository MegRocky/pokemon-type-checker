import { useEffect, useState } from "react";
import InteractionsGrid from "./InteractionsGrid";
function QuarterDamageFromGrid({ damageRelations }) {
  const [quarterDamageFrom, setQuarterDamageFrom] = useState([]);

  useEffect(() => {
    const dmgArr = [];
    for (let type in damageRelations) {
      if (damageRelations[type] === -4) {
        dmgArr.push(type);
      }
    }
    setQuarterDamageFrom(dmgArr);
  }, [damageRelations]);

  return quarterDamageFrom.length > 0 ? (
    <>
      <>
        <p>takes 1/4 damage from:</p>
        <InteractionsGrid interaction={quarterDamageFrom}></InteractionsGrid>
      </>
    </>
  ) : (
    <></>
  );
}
export default QuarterDamageFromGrid;
