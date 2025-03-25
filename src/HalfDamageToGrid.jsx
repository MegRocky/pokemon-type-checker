import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import TypeCard from "./TypeCard";
import InteractionsGrid from "./InteractionsGrid";
function HalfDamageToGrid({ currentPokemonDetails }) {
  const type = currentPokemonDetails.types[0].type.name;

  const [halfDamageto, setHalfDamageTo] = useState([]);

  useEffect(() => {
    getTypeDetails(type).then((response) => {
      return setHalfDamageTo(response.damage_relations.half_damage_to);
    });
  }, [type]);
  return halfDamageto.length > 0 ? (
    <>
      <>
        <p>{type} deal half damage to:</p>
        <InteractionsGrid interaction={halfDamageto}></InteractionsGrid>
      </>
    </>
  ) : (
    <></>
  );
}
export default HalfDamageToGrid;
