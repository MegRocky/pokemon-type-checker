import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import TypeCard from "./TypeCard";
import InteractionsGrid from "./InteractionsGrid";
function HalfDamageFromGrid({ currentPokemonDetails }) {
  const type = currentPokemonDetails.types[0].type.name;

  const [halfDamageFrom, setHalfDamageFrom] = useState([]);

  useEffect(() => {
    getTypeDetails(type).then((response) => {
      return setHalfDamageFrom(response.damage_relations.half_damage_from);
    });
  }, [type]);
  return halfDamageFrom.length > 0 ? (
    <>
      <>
        <p>{type} takes half damage from:</p>
        <InteractionsGrid interaction={halfDamageFrom}></InteractionsGrid>
      </>
    </>
  ) : (
    <></>
  );
}
export default HalfDamageFromGrid;
