import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import InteractionsGrid from "./InteractionsGrid";
function QuarterDamageFromGrid({ currentPokemonDetails }) {
  const quarterDamageFrom = [];
  const typeFirst = currentPokemonDetails.types[0].type.name;
  const typeSecond = currentPokemonDetails.types[1].type.name;
  const [halfDamageFromFirst, sethalfDamageFromFirst] = useState([]);
  const [halfDamageFromSecond, sethalfDamageFromSecond] = useState([]);
  useEffect(() => {
    getTypeDetails(typeFirst).then((response) => {
      return sethalfDamageFromFirst(
        response.damage_relations.half_damage_from.map((type) => {
          return type.name;
        })
      );
    });
    getTypeDetails(typeSecond).then((response) => {
      return sethalfDamageFromSecond(
        response.damage_relations.half_damage_from.map((type) => {
          return type.name;
        })
      );
    });
  }, [currentPokemonDetails]);
  for (let type of halfDamageFromFirst) {
    if (halfDamageFromSecond.includes(type)) {
      quarterDamageFrom.push({ name: type });
    }
  }

  return quarterDamageFrom.length ? (
    <>
      <p> takes 1/4 damage from:</p>
      <InteractionsGrid interaction={quarterDamageFrom}></InteractionsGrid>
    </>
  ) : (
    ""
  );
}
export default QuarterDamageFromGrid;
