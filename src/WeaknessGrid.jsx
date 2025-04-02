import { useEffect, useState } from "react";
import InteractionsGrid from "./InteractionsGrid";
function WeaknessGrid({ damageRelations }) {
  const [doubleDamageFrom, setDoubleDamageFrom] = useState([]);
  console.log(doubleDamageFrom);
  useEffect(() => {
    const dmgArr = [];
    for (let type in damageRelations) {
      if (damageRelations[type] === 2) {
        dmgArr.push(type);
      }
    }
    setDoubleDamageFrom(dmgArr);
  }, [damageRelations]);

  return doubleDamageFrom.length > 0 ? (
    <>
      <>
        <p>takes 2x damage from:</p>
        <InteractionsGrid interaction={doubleDamageFrom}></InteractionsGrid>
      </>
    </>
  ) : (
    <></>
  );
}
export default WeaknessGrid;
