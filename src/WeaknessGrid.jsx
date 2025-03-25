import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import TypeCard from "./TypeCard";
import InteractionsGrid from "./InteractionsGrid";
function WeaknessGrid({ currentPokemonDetails }) {
  const type = currentPokemonDetails.types[0].type.name;

  const [doubleDamageFrom, setDoubleDamagefrom] = useState([]);

  useEffect(() => {
    getTypeDetails(type).then((response) => {
      return setDoubleDamagefrom(response.damage_relations.double_damage_from);
    });
  }, [type]);
  return doubleDamageFrom.length > 0 ? (
    <>
      <>
        <p>{type} takes double damage from:</p>
        <InteractionsGrid interaction={doubleDamageFrom}></InteractionsGrid>
      </>
    </>
  ) : (
    <></>
  );
}
export default WeaknessGrid;
